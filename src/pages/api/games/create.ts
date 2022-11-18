import type { NextApiRequest, NextApiResponse } from "next";
import { isLeft, isRight, Left, Right } from "fp-ts/Either";
import {
    ApiResult,
    CreateGameFailed,
    CreateGameFormValues,
    CreateGameResult,
    CreateGameSuccess,
    Game
} from "../../../types/types";
import { CreateGameFormValuesDecode } from "../../../types/io-ts-def";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { sessionOptions } from "../../../lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { getGamesRepo } from "../../../server/repository/games";
import { clearGameCaches } from "../../../lib/cacheClear";

function makeSuccessResult(
    message: string,
    game: Game
): Right<CreateGameSuccess> {
    return MakeRight({
        result: "Success",
        message,
        game
    });
}

function makeFailedResult(message: string): Left<CreateGameFailed> {
    return MakeLeft({
        result: "Failure",
        message
    });
}

function makeIDFromBody({ name, date }: CreateGameFormValues): Game["_id"] {
    // The rough convention we're going with is "First letter of each word, followed by start date in Ymd format"

    const nameCaps = name
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join("");

    const numberFormat = new Intl.NumberFormat("en-GB", {
        minimumIntegerDigits: 2
    });

    return `${nameCaps}${date.year}${numberFormat.format(
        date.month
    )}${numberFormat.format(date.day ?? 0)}`;
}

async function getResult(body: unknown): Promise<ApiResult<CreateGameResult>> {
    if (!CreateGameFormValuesDecode.is(body)) {
        const result = CreateGameFormValuesDecode.decode(body);

        if (!isLeft(result)) {
            // This should never happen
            return {
                status: 400,
                body: makeFailedResult("Invalid request body")
            };
        }

        const errors: string[] = [];

        result.left.forEach((validation) => {
            if (validation.message) {
                errors.push(validation.message);
            }
        });

        return {
            status: 400,
            body: makeFailedResult(`Invalid request body: ${errors.join(",")}`)
        };
    }

    if (body.type == "") {
        return {
            status: 400,
            body: makeFailedResult("Type was not set")
        };
    }

    const game: Game = {
        ...body,
        _id: makeIDFromBody(body),
        type: body.type
    };

    const gameRepoBase = getGamesRepo();

    if (isLeft(gameRepoBase)) {
        return {
            status: 500,
            body: makeFailedResult(
                `Database was not set up correctly - please contact the webmaster: ${gameRepoBase.left}`
            )
        };
    }

    const gamesRepo = gameRepoBase.right;

    let existingGame = await gamesRepo.get(game._id);
    let count = 1;

    while (isRight(existingGame)) {
        game._id = `${count++}${game._id}`;

        existingGame = await gamesRepo.get(game._id);
    }

    const create = await gamesRepo.insert(game);

    if (isRight(create)) {
        return {
            status: 200,
            body: makeSuccessResult(`Created game`, game)
        };
    }

    return {
        status: 400,
        body: makeFailedResult(
            `Failed to create game, please wait and try again: ${create.left}`
        )
    };
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(
    req: NextApiRequest,
    res: NextApiResponse<CreateGameResult>
) {
    const data = await req.body;

    if (!req.session?.user?.isLoggedIn) {
        res.status(403).json(makeFailedResult("You are not logged in"));
        return;
    }

    const { status, body } = await getResult(data);

    if (isRight(body)) {
        await clearGameCaches(res, body.right.game._id);
    }

    res.status(status).json(body);
}
