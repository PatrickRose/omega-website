import type { NextApiRequest, NextApiResponse } from 'next'
import { UpcomingEventsAPI } from "../../types/types";
import { getGamesRepo } from "../../server/repository/games";
import { isRight } from "fp-ts/Either";

const gameRespository = getGamesRepo();

const handler = (req: NextApiRequest, res: NextApiResponse<UpcomingEventsAPI | Error>) => {
    const games = gameRespository.upcomingEvents(3);

    let status: UpcomingEventsAPI | Error;

    if (isRight(games)) {
        status = { events: games.right }
    } else {
        status = games.left
        res.status(404);
    }

    res.send(status);
};


export default handler;
