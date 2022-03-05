import React, {useState} from "react";
import {Either, isLeft, isRight} from "fp-ts/Either";
import {Game} from "../../types/types";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {Hero, HeroHeading, MainContent} from "../../components/Hero";
import {dateSorter, getStringFromOmegaDate} from "../../utils";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {getGamesRepo} from "../../server/repository/games";
import {MakeLeft} from "../../utils/io-ts-helpers";
import {gameUtils} from "../../utils/games";


type GamesState = {
    fetched: boolean,
    gameList: Either<false, Game[]>,
    filter?: Game["type"],
    past?: boolean
}

const icons = {
    'Play-By-Email': faEnvelopeOpenText,
    'Online game': faDesktop
}

function FetchedMegagame(props: Game) {
    return <li className="grid sm:grid-cols-12 grid-cols-5 gap-4 pb-4">
        <div className="col-span-1 text-center flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={icons[props.type]} title={props.type} className="h-full text-5xl"/>
        </div>
        <div className="sm:col-span-11 col-span-4">
            <h2 className="text-2xl hover:text-omega">
                <Link href={`/games/${props._id}`}>
                    <a>{props.name}</a>
                </Link>
            </h2>
            <p className="font-bold">
                {props.designer}
            </p>
            <p>{getStringFromOmegaDate(props.date)}</p>
            <p>{props.preamble}</p>
        </div>
    </li>
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
    gameList: GamesState["gameList"],
    filter?: Game["type"],
    changeFilter: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
    past: boolean
}

function GameList(props: GameListParams) {
    const {filter, changeFilter, past} = props;

    let gameList: Array<Game>;

    if (isLeft(props.gameList)) {
        return <React.Fragment>
            <p className="py-2">
                Looks like an error occurred while getting the list of games.
            </p>
            <p className="py-2">
                Try refreshing your browser and trying again. If that doesn&apos;t work, <Link href="contact"><a>send
                the
                webmaster a message through the contact page</a></Link>
            </p>
        </React.Fragment>
    } else {
        gameList = props.gameList.right;
    }

    const filterGame = (value: Game): boolean => {
        console.log({date: value.date, isUpcoming: gameUtils.isUpcoming(value)});
        if (!past && !gameUtils.isUpcoming(value)) {
            return false;
        }

        return !(filter !== undefined && (value.type !== filter));
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
                            value => <FetchedMegagame key={value._id} {...value} />
                        )
                    : <p>No games matched your criteria - try again!</p>
            }
        </ul>
    </React.Fragment>
}

export const getStaticProps: GetStaticProps<{ gameList: Either<false, Game[]> }> = async () => {
    const gamesRepo = getGamesRepo();

    if (isLeft(gamesRepo)) {
        return {
            props: {gameList: MakeLeft(false)}
        }
    }

    const gameList = await gamesRepo.right.all();

    if (isRight(gameList)) {
        // Sort mutates the value
        gameList.right.sort(dateSorter);
    }

    return {
        props: {
            gameList
        },
        revalidate: 60
    }
}

export default function Games(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const gameList = props.gameList;

    let pastDefault = undefined;

    if (typeof window !== 'undefined') {
        if (window.location.hash) {
            pastDefault = window.location.hash === '#past';
        }
    }

    const [past, setPast] = useState(pastDefault);
    const [filter, setFilter] = useState<Game["type"] | undefined>(undefined);


    const changeFilter = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        if (event.target instanceof HTMLSelectElement) {
            const value = event.target.value;
            let newVal: GamesState["filter"] = undefined;

            if (value === 'Online game' || value === 'Play-By-Email') {
                newVal = value
            }

            setFilter(newVal);
        } else {
            setPast(event.target.checked);
        }
    }
    return <React.Fragment>
        <Hero>
            <HeroHeading>Upcoming games</HeroHeading>
        </Hero>
        <MainContent>
            <GameList
                gameList={gameList}
                filter={filter}
                changeFilter={changeFilter}
                past={past === undefined ? false : past}
            />
        </MainContent>
    </React.Fragment>;
}
