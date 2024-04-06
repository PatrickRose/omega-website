import { IronSessionData, sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types/types";
import { getIronSession } from "iron-session";

export default async function userRoute(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    const session = await getIronSession<IronSessionData>(
        req,
        res,
        sessionOptions
    );

    if (session.user) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        res.json({
            ...session.user,
            isLoggedIn: true
        });
    } else {
        res.json({
            isLoggedIn: false,
            login: "",
            passwordNeedsReset: false
        });
    }
}
