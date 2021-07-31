import React, {ChangeEvent} from "react";
import {Game} from "../types/types";
import {GameAPIDecode} from "../types/io-ts-def";
import {Hero, HeroHeading} from "../components/Hero";
import {apiCall} from "../utils/api";
import {GameEventList} from "../components/GameEventList";

type GamesState = {
    fetched: boolean,
    gameList: Game[],
    filter?: Game["type"]
}

function GameListFilter(
    props: {
        onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
        value?: Game["type"]
    }
) {
    return <div className="pb-4">
        <label htmlFor="game-filter">Showing</label>
        <select id="game-filter" onChange={props.onChange} value={props.value}>
            <option value={undefined}>all games</option>
            <option value="Play-By-Email">play-by-email games</option>
            <option value="Online game">online games</option>
        </select>
    </div>;
}

type GamesProps = {};

export class Games extends React.Component<GamesProps, GamesState> {
    private controller?: AbortController;
    constructor(props: GamesProps) {
        super(props);

        this.state = {
            fetched: false,
            gameList: [],
        };
    }

    componentDidMount() {
        this.getAllGames();
    }

    componentWillUnmount() {
        this.controller?.abort();
    }

    private getAllGames() {
        this.controller?.abort();

        this.controller = new AbortController();

        const api = apiCall('games', this.controller);

        api.then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
                if (!GameAPIDecode.is(value)) {
                    throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
                }

                value.games.sort((a, b): number => {
                    const aDate = a.date;
                    const bDate = b.date;

                    let keys: (keyof typeof aDate)[] = ['year', 'month', 'day'];

                    for (let key of keys) {
                        if (aDate[key] !== bDate[key]) {
                            return aDate[key] - bDate[key]
                        }
                    }

                    return 0;
                });

                this.setState({
                    fetched: true,
                    gameList: value.games
                });
            }
        );
    }

    render() {
        const {gameList, fetched, filter} = this.state;

        const changeFilter = (event: ChangeEvent<HTMLSelectElement>) => this.changeFilter(event.target.value);

        return <React.Fragment>
            <Hero>
                <HeroHeading>Upcoming games</HeroHeading>
            </Hero>
            <div className="p-4">
                <GameListFilter onChange={changeFilter} value={filter}/>
                <GameEventList
                    fetched={fetched}
                    list={gameList}
                    filter={filter}
                />
            </div>
        </React.Fragment>;
    }

    private changeFilter(value: string) {
        let newVal: GamesState["filter"] = undefined;

        if (value === 'Online game' || value === 'Play-By-Email') {
            newVal = value
        }

        this.setState({filter: newVal})
    }
}
