import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";
import { User } from "../../types/types";
import { getIronSession } from "iron-session";

export default async function logoutRoute(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    const session = await getIronSession(req, res, sessionOptions);
    session.destroy();
    res.json({ isLoggedIn: false, login: "", passwordNeedsReset: false });
}
