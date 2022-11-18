import type { NextApiRequest, NextApiResponse } from "next";
import { getGamesRepo } from "../../../server/repository/games";
import { isLeft, isRight, Left, Right } from "fp-ts/Either";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";
import {
    ApiResult,
    EditGameFailed,
    EditGameResult,
    EditGameSuccess,
    Game
} from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { EditGameFormValuesDecode } from "../../../types/io-ts-def";
import { clearGameCaches } from "../../../lib/cacheClear";

const gameRespository = getGamesRepo();

export default withIronSessionApiRoute(handler, sessionOptions);

function makeSuccessResult(
    message: string,
    game: Game
): Right<EditGameSuccess> {
    return MakeRight({
        result: "Success",
        message,
        game
    });
}

function makeFailedResult(message: string): Left<EditGameFailed> {
    return MakeLeft({
        result: "Failure",
        message
    });
}

async function getResult(
    body: unknown,
    id: string
): Promise<ApiResult<EditGameResult>> {
    const gamesRepoBase = getGamesRepo();

    if (isLeft(gamesRepoBase)) {
        return {
            status: 500,
            body: makeFailedResult(
                `Database was not set up correctly - please contact the webmaster: ${gamesRepoBase.left}`
            )
        };
    }

    const gamesRepo = gamesRepoBase.right;

    if (isLeft(await gamesRepo.get(id))) {
        return {
            status: 404,
            body: makeFailedResult(`Game with id ${id} does not exist`)
        };
    }

    if (!EditGameFormValuesDecode.is(body)) {
        const result = EditGameFormValuesDecode.decode(body);

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
        _id: id,
        type: body.type
    };

    const result = await gamesRepo.update(id, game);

    if (isRight(result)) {
        return {
            status: 200,
            body: makeSuccessResult(`Edited game`, game)
        };
    }

    return {
        status: 400,
        body: makeFailedResult(
            `Failed to Edit game, please wait and try again: ${result.left}`
        )
    };
}

async function updateGame(req: NextApiRequest, res: NextApiResponse) {
    const data = await req.body;

    if (!req.session?.user?.isLoggedIn) {
        res.status(403).json(makeFailedResult("You are not logged in"));
        return;
    }

    if (typeof req.query.id === "string") {
        const { status, body } = await getResult(data, req.query.id);

        if (isRight(body)) {
            await clearGameCaches(res, body.right.game._id);
        }

        res.status(status).json(body);
    } else {
        res.status(400).json(
            makeFailedResult("Did not get a single id in the query params")
        );
    }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method?.toUpperCase() == "POST") {
        await updateGame(req, res);
    } else {
        const gameID = req.query.id;

        if (typeof gameID !== "string") {
            res.status(400).send(
                "Invalid request - can only handle a single ID"
            );
            return;
        }

        if (isLeft(gameRespository)) {
            res.status(500).send(gameRespository.left);
            return;
        }

        const game = await gameRespository.right.get(gameID);

        if (isRight(game)) {
            res.send(game.right);
            return;
        }

        res.status(404).send(game.left);
    }
}
