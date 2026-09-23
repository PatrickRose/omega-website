import type { NextApiRequest, NextApiResponse } from "next";
import { isLeft, isRight } from "fp-ts/Either";
import { getIronSession } from "iron-session";
import { IronSessionData, sessionOptions } from "../../../lib/session";
import { getUserRepo } from "../../../server/repository/user";
import { UserListAPI } from "../../../types/types";

export default async function listUsers(
    req: NextApiRequest,
    res: NextApiResponse<UserListAPI | { message: string }>
) {
    const session = await getIronSession<IronSessionData>(
        req,
        res,
        sessionOptions
    );

    if (!session?.user?.isLoggedIn) {
        res.status(403).json({ message: "You are not logged in" });
        return;
    }

    const userRepoBase = getUserRepo();

    if (isLeft(userRepoBase)) {
        res.status(500).json({ message: userRepoBase.left });
        return;
    }

    const users = await userRepoBase.right.list();

    if (isRight(users)) {
        res.json({ users: users.right });
        return;
    }

    res.status(500).json({ message: "Could not load the list of users" });
}
