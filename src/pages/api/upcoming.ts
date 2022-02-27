import type {NextApiRequest, NextApiResponse} from 'next'
import {UpcomingEventsAPI} from "../../types/types";
import {getGamesRepo} from "../../server/repository/games";
import {isLeft, isRight} from "fp-ts/Either";

const gameRespository = getGamesRepo();

const handler = async (req: NextApiRequest, res: NextApiResponse<UpcomingEventsAPI | false>) => {
    const gameRepo = gameRespository;

    let status: UpcomingEventsAPI | false;

    if (isLeft(gameRepo)) {
        status = false;
        res.status(500);
    } else {
        const games = await gameRepo.right.upcomingEvents(3);
        if (isRight(games)) {
            status = {events: games.right}
        } else {
            status = games.left
            res.status(404);
        }
    }

    res.send(status);
};


export default handler;
