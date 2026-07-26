import type { NextApiRequest, NextApiResponse } from "next";
import { isLeft, Left, Right } from "fp-ts/Either";
import { getUserRepo } from "../../../server/repository/user";
import { hashPassword } from "../../../server/repository/user/argon";
import { DEFAULT_PASSWORD } from "../../../server/repository/user/consts";
import { ResetPasswordFormValuesDecode } from "../../../types/io-ts-def";
import {
    ApiResult,
    ResetPasswordFailed,
    ResetPasswordResult,
    ResetPasswordSuccess,
    User
} from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { IronSessionData, sessionOptions } from "../../../lib/session";
import { getIronSession } from "iron-session";

function makeSuccess(message: string): Right<ResetPasswordSuccess> {
    return MakeRight({
        result: "Success",
        message
    });
}

function makeFailure(message: string): Left<ResetPasswordFailed> {
    return MakeLeft({
        result: "Failure",
        message
    });
}

async function getResult(
    body: unknown,
    user?: User
): Promise<ApiResult<ResetPasswordResult>> {
    if (!user) {
        return {
            status: 401,
            body: makeFailure("You are not logged in")
        };
    }

    if (!ResetPasswordFormValuesDecode.is(body)) {
        return {
            status: 400,
            body: makeFailure("Invalid request body - missing username")
        };
    }

    const { username } = body;

    // The username is used directly in a MongoDB query filter, so guard
    // against NoSQL operator injection by ensuring it is a plain string
    // before it reaches the repository.
    if (typeof username !== "string") {
        return {
            status: 400,
            body: makeFailure(
                "Invalid request body - username must be a string"
            )
        };
    }

    const userRepoBase = getUserRepo();

    if (isLeft(userRepoBase)) {
        return {
            status: 500,
            body: makeFailure(
                `Database was not set up correctly - please contact the webmaster: ${userRepoBase.left}`
            )
        };
    }

    const userRepo = userRepoBase.right;

    const dbUserResult = await userRepo.get(username);

    if (isLeft(dbUserResult)) {
        return {
            status: 400,
            body: makeFailure("Could not find a user with that username")
        };
    }

    const dbUser = dbUserResult.right;

    // Reset to the shared default password and force the user to pick a new one
    // on their next login (the useUser hook redirects on passwordNeedsReset).
    dbUser.password = await hashPassword(DEFAULT_PASSWORD);
    dbUser.passwordNeedsReset = true;

    const updateResult = await userRepo.update(username, dbUser);

    if (isLeft(updateResult)) {
        return {
            status: 400,
            body: makeFailure(updateResult.left)
        };
    }

    return {
        status: 200,
        body: makeSuccess(
            `Reset password for ${username} to ${DEFAULT_PASSWORD}. They will be asked to set a new password on their next login.`
        )
    };
}

export default async function resetPassword(
    req: NextApiRequest,
    res: NextApiResponse<ResetPasswordResult>
) {
    const session = await getIronSession<IronSessionData>(
        req,
        res,
        sessionOptions
    );
    const data = await req.body;

    if (!session?.user?.isLoggedIn) {
        res.status(403).json(makeFailure("You are not logged in"));
        return;
    }

    const { status, body } = await getResult(data, session.user);

    res.status(status).json(body);
}
