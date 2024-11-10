import React from "react";
import { Game, PlayByEmailGame } from "../../../types/types";
import { PlayByEmailGameDecode } from "../../../types/io-ts-def";
import { isLeft, isRight } from "fp-ts/Either";
import { getStringFromOmegaDate } from "../../../utils";
import Markdown from "../../../components/Markdown";
import { getGamesRepo } from "../../../server/repository/games";
import { notFound } from "next/navigation";
import GameStructure from "./GameStructure";

function isPBEM(game: Game): game is PlayByEmailGame {
    return isRight(PlayByEmailGameDecode.decode(game));
}

export default async function SingleGame(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const gameRepo = getGamesRepo();

    if (isLeft(gameRepo)) {
        notFound();
    }

    const gameRes = await gameRepo.right.get(params.id);

    if (isLeft(gameRes)) {
        notFound();
    }

    const game = gameRes.right;

    const heading = <React.Fragment>{game.name}</React.Fragment>;
    const subHeading = (
        <p className="pb-8 font-bold">
            <span className="text-xl">{game.designer}</span>
            <br />
            {getStringFromOmegaDate(game.date)}
            {isPBEM(game) ? ` - ${getStringFromOmegaDate(game.endDate)}` : null}
        </p>
    );
    const mainContent = <Markdown markdown={game.fullDescription} />;

    return (
        <GameStructure
            heading={heading}
            subHeading={subHeading}
            mainContent={mainContent}
        />
    );
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
    const gamesRepo = getGamesRepo();

    if (isLeft(gamesRepo)) {
        return [];
    }

    // Get the next 3 games
    // These are the ones that get displayed on the home page so we
    // assume that these are most likely to be visited
    const upcomingGames = await gamesRepo.right.upcomingEvents(3);

    // If we have some games, add them to the list
    if (isRight(upcomingGames)) {
        return upcomingGames.right.map(({ _id }) => {
            return { id: _id };
        });
    }

    return [];
}
