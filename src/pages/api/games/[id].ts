import type { NextApiRequest, NextApiResponse } from 'next'
import { getGamesRepo } from "../../../server/repository/games";
import { isRight } from "fp-ts/Either";

const gameRespository = getGamesRepo();

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const gameID = req.query.id;

    if (typeof gameID !== 'string') {
        res.status(400).send('Invalid request - can only handle a single ID');
        return;
    }

    const game = gameRespository.get(gameID);

    if (isRight(game)) {
        res.send(game.right);
        return;
    }

    res.status(404).send(game.left)
};

export default handler;
