import React from "react";
import {Game} from "../types/types";
import {apiCall} from "../utils/api";
import {GameDecode} from "../types/io-ts-def";
import {isRight} from "fp-ts/Either";
import {Hero, HeroHeading} from "../components/Hero";
import {TextRow} from "../components/Placeholders";

type SingleGameProps = {
    game: string
};
type GamesState = {
    fetched: boolean,
    game?: Game,
    error?: boolean
}

function isGame(value: any): value is Game {
    return isRight(GameDecode.decode(value));
}

export class SingleGame extends React.Component<SingleGameProps, GamesState> {
    constructor(props: SingleGameProps) {
        super(props);

        this.state = {
            fetched: false,
        };
    }

    componentDidMount() {
        this.getGame();
    }

    private getGame() {
        const api = apiCall(`games/${this.props.game}`);

        api.then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
                if (!isGame(value)) {
                    throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
                }
                this.setState({
                    fetched: true,
                    game: value
                });
            }
        );
    }

    render() {
        const {game, fetched} = this.state;

        return <React.Fragment>
            <Hero>
                <HeroHeading>
                    {
                        fetched
                            ? game?.name
                            : <TextRow background="bg-white" />
                    }
                </HeroHeading>
            </Hero>
            <div className="p-4">
                {
                    fetched
                        ? <div>GAME FETCHED: {game?.name}</div>
                        : <div>Fetching</div>}
            </div>
        </React.Fragment>;
    }
}
