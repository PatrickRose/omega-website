import React from "react";
import { isLeft } from "fp-ts/Either";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import { getGamesRepo } from "../../server/repository/games";
import { MakeLeft } from "../../utils/io-ts-helpers";
import { GameListWrapper } from "./GameList";

export default async function Games() {
    const gamesRepo = getGamesRepo();

    const gameList = isLeft(gamesRepo)
        ? MakeLeft<false>(false)
        : await gamesRepo.right.all();

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Upcoming games</HeroHeading>
            </Hero>
            <MainContent>
                <GameListWrapper gameList={gameList} />
            </MainContent>
        </React.Fragment>
    );
}
