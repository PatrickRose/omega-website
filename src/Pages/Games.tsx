import React, {ReactElement} from "react";
import {isRight} from "fp-ts/Either";
import {Game, GameAPI} from "../types/types";
import {GameAPIDecode} from "../types/io-ts-def";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";
import {Circle, TextRow} from "../components/Placeholders";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Hero, HeroHeading, MainContent} from "../components/Hero";
import {dateSorter, getJSDateFromGameDate, getStringFromGameDate} from "../utils";
import {apiCall} from "../utils/api";

function isGameApi(value: any): value is GameAPI {
    let ma = GameAPIDecode.decode(value);
    return isRight(ma);
}

type GamesState = {
    fetched: boolean,
    gameList: Game[],
    filter?: Game["type"],
    past?: boolean
}

const icons = {
    'Play-By-Email': faEnvelopeOpenText,
    'Online game': faDesktop
}

abstract class MegagameList<T> extends React.Component<T> {
    render() {

        return <li className="grid sm:grid-cols-12 grid-cols-5 gap-4 pb-4">
            <div className="col-span-1 text-center flex flex-col justify-center items-center">
                {this.getIcon()}
            </div>
            <div className="sm:col-span-11 col-span-4">
                <h2 className="text-2xl hover:text-omega">
                    {this.getHeading()}
                </h2>
                {this.getSubtitle()}
                {this.getDate()}
                {this.getPreamble()}
            </div>
        </li>
    }

    protected abstract getPreamble(): ReactElement;

    protected abstract getSubtitle(): ReactElement;

    protected abstract getDate(): ReactElement;

    protected abstract getHeading(): ReactElement;

    protected abstract getIcon(): ReactElement;
}

class UnfetchedMegagame extends MegagameList<{ key: number }> {

    protected getIcon(): React.ReactElement {
        return <Circle className="bg-gray-500"/>;
    }

    protected getDate(): React.ReactElement {
        return <div className="w-1/4"><TextRow className="bg-gray-500 mb-2 h-3" height={false}/></div>;
    }

    protected getHeading(): React.ReactElement {
        return <div className="w-2/4"><TextRow className="bg-gray-500 mb-2"/></div>;
    }

    protected getSubtitle(): React.ReactElement {
        return <div className="w-2/6"><TextRow className="bg-gray-500 mb-2 h-3" height={false}/></div>;
    }

    protected getPreamble(): React.ReactElement {
        return <div className="w-5/6">
            {
                (new Array(3))
                    .fill(null)
                    .map((value, index) => <TextRow key={index} className="bg-gray-500 mb-2 h-4" height={false}/>)
            }
        </div>;
    }

}

class FetchedMegagame extends MegagameList<Game> {

    protected getIcon(): ReactElement {
        return <FontAwesomeIcon icon={icons[this.props.type]} title={this.props.type} className="h-full text-5xl"/>;
    }

    protected getHeading(): React.ReactElement {
        return <Link to={`/games/${this.props.id}`}>{this.props.name}</Link>;
    }

    protected getDate(): React.ReactElement {
        let jsDate = getStringFromGameDate(this.props.date);
        return <p>{jsDate}</p>;
    }

    protected getSubtitle(): React.ReactElement {
        return <p className="font-bold">
            {this.props.designer}
        </p>;
    }

    protected getPreamble() {
        return <p>{this.props.preamble}</p>;
    }

}

function GameListFilter(
    props: {
        onChange: GameListParams["changeFilter"],
        value?: Game["type"],
        past: boolean
    }
) {
    return <div className="pb-4">
        <div className="flex md:flex-row flex-col">
            <div className="flex-1 flex flex-col justify-center">
                <div>
                    <label className="pr-1" htmlFor="game-filter">Showing</label>
                    <select id="game-filter" onChange={props.onChange} value={props.value}>
                        <option value={undefined}>all games</option>
                        <option value="Play-By-Email">play-by-email games</option>
                        <option value="Online game">online games</option>
                    </select>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <div>
                    <input id="only-future" type="checkbox" checked={props.past} onChange={props.onChange}/>
                    <label className="pl-1" htmlFor="only-future">Show past games</label>
                </div>
            </div>
        </div>
    </div>;
}

type GameListParams = {
    gameList: Game[],
    filter?: Game["type"],
    changeFilter: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
    past: boolean,
    fetched: boolean
}

function GameList(props: GameListParams) {
    const {fetched, filter, changeFilter, past} = props;

    let gameList: Array<Game | number> = fetched
        ? props.gameList
        : [1, 2];


    const filterGame = (value: Game | number): boolean => {
        // Always include numbers
        if (typeof value === 'number') {
            return true;
        }

        if (!past && (getJSDateFromGameDate(value.date) < new Date())) {
            return false;
        }

        if (filter !== undefined && (value.type !== filter)) {
            return false;
        }

        return true;
    }

    // We filter on the client side because we're not going to have a lot of things to filter
    const filteredGames = gameList.filter(filterGame);

    return <React.Fragment>
        <GameListFilter onChange={changeFilter} value={filter} past={past}/>
        <ul>
            {
                filteredGames.length > 0
                    ? filteredGames
                        .map(
                            value =>
                                typeof value === 'number'
                                    ? <UnfetchedMegagame key={value}/>
                                    : <FetchedMegagame key={value.id} {...value} />
                        )
                    : <p>No games matched your criteria - try again!</p>
            }
        </ul>
    </React.Fragment>
}

type GamesProps = {};

export class Games extends React.Component<GamesProps, GamesState> {
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

    private getAllGames() {
        const api = apiCall('games');

        api.then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
                if (!isGameApi(value)) {
                    throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
                }

                value.games.sort(dateSorter);

                this.setState({
                    fetched: true,
                    gameList: value.games
                });
            }
        );
    }

    render() {
        const {gameList, fetched, filter, past} = this.state;

        const changeFilter = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
            if (event.target instanceof HTMLSelectElement) {
                this.changeFilter(event.target.value);
            } else {
                this.setState({past: event.target.checked})
            }
        }
        return <React.Fragment>
            <Hero>
                <HeroHeading>Upcoming games</HeroHeading>
            </Hero>
            <MainContent>
                <GameList
                    fetched={fetched}
                    gameList={gameList}
                    filter={filter}
                    changeFilter={changeFilter}
                    past={past === undefined ? false : past}
                />
            </MainContent>
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
