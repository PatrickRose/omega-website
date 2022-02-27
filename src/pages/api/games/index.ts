import type {NextApiRequest, NextApiResponse} from 'next'
import {GameAPI} from "../../../types/types";
import {getGamesRepo} from "../../../server/repository/games";
import {isLeft, isRight} from "fp-ts/Either";

const gameRespository = getGamesRepo();

let handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

if (isLeft(gameRespository)) {
    handler = async (req: NextApiRequest, res: NextApiResponse) => {
        res.status(500).json({message: gameRespository.left})
    };
} else {
    handler = async (req: NextApiRequest, res: NextApiResponse) => {
        const allGames = await gameRespository.right.all();

        if (isRight(allGames)) {
            const apiResponse: GameAPI = {
                games: allGames.right
            };

            res.json(apiResponse);
            return;
        }

        res.status(500).json(allGames.left)
    };
}


export default handler;
