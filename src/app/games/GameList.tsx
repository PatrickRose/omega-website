"use client";

import { Game } from "../../types/types";
import React, { useEffect, useState } from "react";
import { getJSDateFromOmegaDate, getStringFromOmegaDate } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GAME_ICONS, gameUtils, isGameActive } from "../../utils/games";
import Link from "next/link";
import { Either, isLeft } from "fp-ts/Either";

export type GamesState = {
    fetched: boolean;
    gameList: Either<false, Game[]>;
    filter?: Game["type"];
    past?: boolean;
};

function FetchedMegagame(props: Game) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    return (
        <li
            className={`grid sm:grid-cols-12 grid-cols-5 gap-4 pb-4 ${
                getJSDateFromOmegaDate(props.date) > new Date()
                    ? "future"
                    : "past"
            }`}
        >
            <hr className="col-span-12" />
            <div className="col-span-1 flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon
                    icon={GAME_ICONS[props.type]}
                    title={props.type}
                    className="h-full w-full"
                />
            </div>
            <div className="col-span-4 sm:col-span-11">
                <h2 className="hover:text-omega text-2xl">
                    <Link href={`/games/${props._id}`}>{props.name}</Link>
                    {isGameActive(props) ? (
                        <span className="p-1 m-2 text-center rounded-sm text-base bg-omega-dark text-omega-light">
                            Active Game
                        </span>
                    ) : null}
                </h2>
                <p className="font-bold">{props.designer}</p>
                <p>{getStringFromOmegaDate(props.date)}</p>
                <p>{props.preamble}</p>
            </div>
        </li>
    );
}

function GameListFilter(props: {
    onChange: GameListParams["changeFilter"];
    value?: Game["type"];
    past: boolean;
}) {
    return (
        <div className="pb-4">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-1 flex-col justify-center">
                    <div>
                        <label
                            className="pr-1"
                            htmlFor="game-filter"
                        >
                            Showing
                        </label>
                        <select
                            id="game-filter"
                            onChange={props.onChange}
                            value={props.value}
                        >
                            <option value={undefined}>all games</option>
                            <option value="Play-By-Email">
                                play-by-email games
                            </option>
                            <option value="Online game">online games</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <div>
                        <input
                            id="only-future"
                            type="checkbox"
                            checked={props.past}
                            onChange={props.onChange}
                        />
                        <label
                            className="pl-1"
                            htmlFor="only-future"
                        >
                            Show past games
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

type GameListParams = {
    gameList: GamesState["gameList"];
    filter?: Game["type"];
    changeFilter: (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void;
    past: boolean;
};

export function GameList(props: GameListParams) {
    const { filter, changeFilter, past } = props;

    let gameList: Array<Game>;

    if (isLeft(props.gameList)) {
        return (
            <React.Fragment>
                <p className="py-2">
                    Looks like an error occurred while getting the list of
                    games.
                </p>
                <p className="py-2">
                    Try refreshing your browser and trying again. If that
                    doesn&apos;t work,{" "}
                    <Link href="contact">
                        send the webmaster a message through the contact page
                    </Link>
                </p>
            </React.Fragment>
        );
    } else {
        gameList = props.gameList.right;
    }

    const filterGame = (value: Game): boolean => {
        if (!past && !gameUtils.isUpcoming(value)) {
            return false;
        }

        return !(filter !== undefined && value.type !== filter);
    };

    // We filter on the client side because we're not going to have a lot of things to filter
    const filteredGames = gameList.filter(filterGame);

    return (
        <React.Fragment>
            <GameListFilter
                onChange={changeFilter}
                value={filter}
                past={past}
            />
            <ul>
                {filteredGames.length > 0 ? (
                    filteredGames.map((value) => (
                        <FetchedMegagame
                            key={value._id}
                            {...value}
                        />
                    ))
                ) : (
                    <p>No games matched your criteria - try again!</p>
                )}
            </ul>
        </React.Fragment>
    );
}

export function GameListWrapper({
    gameList
}: {
    gameList: GamesState["gameList"];
}) {
    const [past, setPast] = useState<boolean>();
    const [filter, setFilter] = useState<Game["type"] | undefined>(undefined);

    useEffect(() => {
        if (window.location.hash && past === undefined) {
            setPast(true);
        }
    }, [past]);

    const changeFilter = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        if (event.target instanceof HTMLSelectElement) {
            const value = event.target.value;
            let newVal: GamesState["filter"] = undefined;

            if (value === "Online game" || value === "Play-By-Email") {
                newVal = value;
            }

            setFilter(newVal);
        } else {
            setPast(event.target.checked);
        }
    };

    return (
        <GameList
            gameList={gameList}
            changeFilter={changeFilter}
            filter={filter}
            past={!!past}
        />
    );
}
