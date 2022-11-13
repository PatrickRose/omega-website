import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { Game, PlayByEmailGame } from "../../types/types";
import { PlayByEmailGameDecode } from "../../types/io-ts-def";
import { Either, isLeft, isRight } from "fp-ts/Either";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import { TextRow } from "../../components/Placeholders";
import { getStringFromOmegaDate } from "../../utils";
import Markdown from "../../components/Markdown";
import Link from "next/link";
import { NoMatch } from "../../components/NoMatch";
import { MakeLeft } from "../../utils/io-ts-helpers";
import { getGamesRepo } from "../../server/repository/games";

type SingleGameProps = {
    game: Either<false, Game>;
};

function isPBEM(game: Game): game is PlayByEmailGame {
    return isRight(PlayByEmailGameDecode.decode(game));
}

abstract class GameStructure<T> extends React.Component<T> {
    render() {
        return (
            <React.Fragment>
                <Hero>
                    <div className="text-center">
                        <HeroHeading
                            className="flex justify-center pb-3"
                            padding={false}
                        >
                            {this.getHeading()}
                        </HeroHeading>
                        {this.getSubHeading()}
                    </div>
                </Hero>
                <MainContent>
                    <div className="flex justify-center">
                        <Link href="/games">
                            <a className="btn-link my-4 px-4 py-2">
                                &laquo; Back to games list
                            </a>
                        </Link>
                    </div>
                    {this.getMainContent()}
                </MainContent>
            </React.Fragment>
        );
    }

    protected abstract getHeading(): React.ReactElement;

    protected abstract getSubHeading(): React.ReactElement;

    protected abstract getMainContent(): React.ReactElement;
}

class FetchedGame extends GameStructure<{ game: Game }> {
    protected getHeading(): React.ReactElement {
        const { game } = this.props;

        return <React.Fragment>{game.name}</React.Fragment>;
    }

    protected getSubHeading(): React.ReactElement {
        const { game } = this.props;

        return (
            <p className="pb-8 font-bold">
                <span className="text-xl">{game.designer}</span>
                <br />
                {getStringFromOmegaDate(game.date)}
                {isPBEM(game)
                    ? ` - ${getStringFromOmegaDate(game.endDate)}`
                    : null}
            </p>
        );
    }

    protected getMainContent(): React.ReactElement {
        const { game } = this.props;

        return <Markdown markdown={game.fullDescription} />;
    }
}

class LoadingGame extends GameStructure<{}> {
    protected getHeading(): React.ReactElement {
        return (
            <div className="w-2/4">
                <TextRow className="bg-white" />
            </div>
        );
    }

    protected getMainContent(): React.ReactElement {
        return (
            <React.Fragment>
                {new Array(5).fill(null).map((value, index) => (
                    <TextRow
                        key={index}
                        className="mb-2 bg-gray-500"
                    />
                ))}
            </React.Fragment>
        );
    }

    protected getSubHeading(): React.ReactElement {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="w-2/6 pb-2">
                    <TextRow
                        className="h-6 bg-white"
                        height={false}
                    />
                </div>
                <div className="w-1/6">
                    <TextRow
                        className="h-6 bg-white"
                        height={false}
                    />
                </div>
            </div>
        );
    }
}

export const getStaticProps: GetStaticProps<SingleGameProps> = async (
    context
) => {
    const id = context?.params?.id;

    if (typeof id != "string") {
        throw Error(
            `Should not have called this page without a string. Params were: ${context?.params}`
        );
    }

    const gamesRepo = getGamesRepo();

    const game: SingleGameProps["game"] = isLeft(gamesRepo)
        ? MakeLeft(false)
        : await gamesRepo.right.get(id);

    return {
        props: { game },
        // Long-lived cache of a week
        // We invalidate the cache when edited, so this is fine
        revalidate: 604800
    };
};

// Intentionally use Partial here
// This is because we use the fallback feature of nextjs, so we can't guarentee
// that the game will be set
export default function SingleGame({
    game
}: Partial<InferGetStaticPropsType<typeof getStaticProps>>) {
    if (!game) {
        // Then we're in a fallback state
        return <LoadingGame />;
    }

    if (isRight(game)) {
        return <FetchedGame game={game.right} />;
    }

    return <NoMatch />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const gamesRepo = getGamesRepo();

    if (isLeft(gamesRepo)) {
        return { paths: [], fallback: true };
    }

    // Get the next 3 games
    // These are the ones that get displayed on the home page so we
    // assume that these are most likely to be visited
    const upcomingGames = await gamesRepo.right.upcomingEvents(3);

    const paths: { params: { id: string } }[] = [];

    // If we have some games, add them to the list
    if (isRight(upcomingGames)) {
        upcomingGames.right.forEach(({ _id }) => {
            paths.push({ params: { id: _id } });
        });
    }

    return {
        paths: paths,
        fallback: true
    };
};
