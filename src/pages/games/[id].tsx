import { GetStaticProps, GetStaticPaths } from 'next';
import React from "react";
import { Game, PlayByEmailGame } from "../../types/types";
import { apiCall } from "../../utils/api";
import { GameDecode, PlayByEmailGameDecode } from "../../types/io-ts-def";
import { Either, isRight } from "fp-ts/Either";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import { TextRow } from "../../components/Placeholders";
import { getStringFromGameDate } from "../../utils";
import Markdown from "../../components/Markdown";
import Link from "next/link";
import { NoMatch } from "../../components/NoMatch";
import { MakeLeft, MakeRight } from "../../utils/io-ts-helpers";

type SingleGameProps = {
    game: string
};
type GamesState = {
    game: Either<Error, Game> | false
}

function isGame(value: any): value is Game {
    return isRight(GameDecode.decode(value));
}

function isPBEM(game: Game): game is PlayByEmailGame {
    return isRight(PlayByEmailGameDecode.decode(game));
}

abstract class GameStructure<T> extends React.Component<T> {
    render() {
        return <React.Fragment>
            <Hero>
                <div className="text-center">
                    <HeroHeading className="flex justify-center pb-3" padding={false}>
                        {this.getHeading()}
                    </HeroHeading>
                    {
                        this.getSubHeading()
                    }
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
        </React.Fragment>;
    }

    protected abstract getHeading(): React.ReactElement

    protected abstract getSubHeading(): React.ReactElement

    protected abstract getMainContent(): React.ReactElement
}

class FetchedGame extends GameStructure<{ game: Game }> {

    protected getHeading(): React.ReactElement {
        const { game } = this.props;

        return <React.Fragment>{game.name}</React.Fragment>;
    }

    protected getSubHeading(): React.ReactElement {
        const { game } = this.props;

        return <p className="font-bold pb-8">
            <span className="text-xl">
                {game.designer}
            </span>
            <br />
            {getStringFromGameDate(game.date)}
            {
                isPBEM(game) ? ` - ${getStringFromGameDate(game.endDate)}` : null
            }
        </p>;
    }

    protected getMainContent(): React.ReactElement {
        const { game } = this.props;

        return <Markdown markdown={game.fullDescription} />;
    }
}

class LoadingGame extends GameStructure<{}> {

    protected getHeading(): React.ReactElement {
        return <div className="w-2/4"><TextRow className="bg-white" /></div>;
    }

    protected getMainContent(): React.ReactElement {
        return <React.Fragment>
            {
                new Array(5)
                    .fill(null)
                    .map((value, index) =>
                        <TextRow key={index}
                            className="bg-gray-500 mb-2" />
                    )
            }
        </React.Fragment>
    }

    protected getSubHeading(): React.ReactElement {
        return <div className="flex flex-col items-center justify-center">
            <div className="w-2/6 pb-2">
                <TextRow className="bg-white h-6" height={false} />
            </div>
            <div className="w-1/6">
                <TextRow className="bg-white h-6" height={false} />
            </div>
        </div>;
    }

}

class SingleGame extends React.Component<SingleGameProps, GamesState> {
    private controller: AbortController | undefined;

    constructor(props: SingleGameProps) {
        super(props);

        this.controller = undefined;

        this.state = {
            game: false,
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.getGame();
        }
    }

    private getGame() {
        const { controller, response: api } = apiCall(`games/${this.props.game}`);

        this.controller = controller;

        api.then(response => {
            this.controller = undefined;

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
            if (!isGame(value)) {
                throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
            }
            this.setState({
                game: MakeRight(value)
            });
        }
        ).catch(
            reason => {
                if (!(reason instanceof DOMException)) {
                    this.setState({
                        game: MakeLeft(reason)
                    })
                }
            }
        );
    }

    componentWillUnmount() {
        if (this.controller) {
            this.controller.abort();
        }
    }

    render() {
        const { game } = this.state;

        if (game === false) {
            return <LoadingGame />
        }

        if (isRight(game)) {
            return <FetchedGame game={game.right} />
        }

        return <NoMatch />;
    }
}

export default SingleGame

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params;

    return {
        props: {
            game: params.id
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}



