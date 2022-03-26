import type {NextApiRequest, NextApiResponse} from 'next'
import {RSS_URL} from "../../../../server/repository/podcast/rss";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.redirect(RSS_URL);
}

export default handler;
