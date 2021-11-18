import type { NextApiRequest, NextApiResponse } from 'next'
import { GameAPI } from "../../../types/types";
import { getGamesRepo } from "../../../server/repository/games";
import { isRight } from "fp-ts/Either";

const gameRespository = getGamesRepo();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const allGames = await gameRespository.all();

    if (isRight(allGames)) {
        const apiResponse: GameAPI = {
            games: allGames.right
        };

        res.json(apiResponse);
        return;
    }

    res.status(500).json(allGames.left)
};


export default handler;
