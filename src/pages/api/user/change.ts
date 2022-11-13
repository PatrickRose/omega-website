import * as argon2 from "argon2";
import { isLeft, isRight, Left, Right } from "fp-ts/lib/Either";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../../lib/session";
import { getUserRepo } from "../../../server/repository/user";
import { hashPassword } from "../../../server/repository/user/argon";
import { ChangePasswordFormValuesDecode } from "../../../types/io-ts-def";
import {
    ApiResult,
    ChangePasswordFailed,
    ChangePasswordResult,
    ChangePasswordSuccess,
    User
} from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";

export default withIronSessionApiRoute(changePassword, sessionOptions);

function makeSuccess(
    message: string,
    user: User
): Right<ChangePasswordSuccess> {
    return MakeRight({
        result: "Success",
        message,
        user
    });
}

function makeFailure(message: string): Left<ChangePasswordFailed> {
    return MakeLeft({
        result: "Failure",
        message
    });
}

async function getResult(
    body: unknown,
    user?: User
): Promise<ApiResult<ChangePasswordResult>> {
    if (!user) {
        return {
            status: 401,
            body: makeFailure("You are not logged in")
        };
    }

    if (!ChangePasswordFormValuesDecode.is(body)) {
        return {
            status: 400,
            body: makeFailure("Invalid request body - missing required fields")
        };
    }

    const userRepoBase = getUserRepo();

    if (isLeft(userRepoBase)) {
        return {
            status: 500,
            body: makeFailure(
                `Failed to create user, please wait and try again: ${userRepoBase.left}`
            )
        };
    }

    const userRepo = userRepoBase.right;

    const dbUserResult = await userRepo.get(user.login);

    if (isLeft(dbUserResult)) {
        return {
            status: 400,
            body: makeFailure(
                "Could not find your user. Please wait and try again"
            )
        };
    }

    const dbUser = dbUserResult.right;

    // Verify the hash
    if (!(await argon2.verify(dbUser.password, body.originalPassword))) {
        return {
            status: 400,
            body: makeFailure("Your original password did not match")
        };
    }

    dbUser.password = await hashPassword(body.newPassword);
    // We've just reset it, so it shouldn't need to be reset
    dbUser.passwordNeedsReset = false;

    const updateResult = await userRepo.update(user.login, dbUser);

    if (isLeft(updateResult)) {
        return {
            status: 400,
            body: makeFailure(updateResult.left)
        };
    }

    return {
        status: 200,
        body: makeSuccess("Password changed successfully", {
            ...user,
            passwordNeedsReset: false
        })
    };
}

async function changePassword(
    req: NextApiRequest,
    res: NextApiResponse<ChangePasswordResult>
) {
    const data = await req.body;

    if (!req.session?.user?.isLoggedIn) {
        res.status(403).json(makeFailure("You are not logged in"));
        return;
    }

    const { status, body } = await getResult(data, req.session.user);

    if (isRight(body)) {
        req.session.user = body.right.user;
        await req.session.save();
    }

    res.status(status).json(body);
}
