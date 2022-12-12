import React from "react";
import { Hero, HeroHeading, MainContent } from "../components/Hero";
import { Game } from "../types/types";
import Link from "next/link";
import Image from "next/image";
import completedAction from "../../public/completed-action.png";
import { DISCORD_LINK } from "./contact";

function GameDescriptions() {
    const gameTypes: { type: Game["type"]; description: React.ReactElement }[] =
        [
            {
                type: "Play-By-Email",
                description: (
                    <>
                        <em>Play-By-Email</em> megagames are multi-day events,
                        with players primarily taking actions and interacting
                        with other players using email.
                    </>
                )
            },
            {
                type: "Online game",
                description: (
                    <>
                        An <em>online game</em> takes the
                        &quot;traditional&quot; one day megagame experience and
                        moves it online, with players using online tools like
                        Discord, Miro or Google Sheets
                    </>
                )
            }
        ];

    return (
        <dl className="flex-row py-2 md:flex">
            {gameTypes.map((value) => (
                <div
                    className="flex-1 pb-1 md:px-2 md:pb-0"
                    key={value.type}
                >
                    <dt className="flex-1 text-2xl md:text-center">
                        {value.type}
                    </dt>
                    <dd>{value.description}</dd>
                </div>
            ))}
        </dl>
    );
}

export default function Planning() {
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Planning</HeroHeading>
            </Hero>
            <MainContent>
                <p>
                    OMEGA aims to put a selection of games on each year,
                    normally falling under one of two types:
                </p>
                <GameDescriptions />
                <h2 className="py-3 text-3xl">Running a game with us</h2>
                <p>
                    OMEGA are always looking for new game designs to run online.
                    Throughout the year, the Steering Committee will put out a
                    call for game pitches. Games can be in any state at this
                    point - maybe you just have a good idea for a game, maybe
                    you have a full design ready to go. If your game is selected
                    for the OMEGA calendar, then the Steering Committee will
                    work with you and help with marketing, logistics and any
                    technical issues you might have.
                </p>
                <h3 className="pt-2 text-2xl">Existing in-person designs</h3>
                <p>
                    If you have an existing megagame design that you&apos;ve run
                    in person and want to run online, the team at OMEGA has an
                    existing track record of porting games to an online format.
                </p>
                <p>
                    If you&apos;re interested in having your game ported, feel
                    free to{" "}
                    <Link href="/contact">
                        get in touch and see how we can help you
                    </Link>
                    .
                </p>
                <h2 className="py-3 text-3xl">Help to run games</h2>
                <p>
                    OMEGA is always looking for people to help run games, either
                    by providing technical expertise or by being part of the
                    Control team. Being part of the Control team for a megagame
                    every so often is highly recommended, especially for those
                    who play a lot of games! To find out more,{" "}
                    <a href={DISCORD_LINK}>join our Discord server</a>.
                </p>
                <div className="flex w-full justify-center p-2">
                    <Image
                        className="lg:w-3/4"
                        src={completedAction}
                        alt=""
                    />
                </div>
            </MainContent>
        </React.Fragment>
    );
}
