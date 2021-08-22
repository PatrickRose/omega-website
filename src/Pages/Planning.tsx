import React from "react";
import {Hero, HeroHeading} from "../components/Hero";
import {Game} from "../types/types";

function GameDescriptions() {
    const gameTypes: { type: Game["type"], description: React.ReactElement }[] = [
        {
            type: "Play-By-Email",
            description: <>
                <em>Play-By-Email</em> megagames are multi-day events, with players primarily taking actions and
                interacting with other players using email.
            </>
        },
        {
            type: "Online game",
            description: <>An <em>online game</em> takes the "traditional" one day megagame experience
                and moves it online, with players using online tools like Discord, Miro or Google Sheets</>
        }
    ];

    return <dl className="md:flex flex-row py-2">
        {
            gameTypes.map(value => <div className="flex-1 md:px-2 md:pb-0 pb-1" key={value.type}>
                <dt className="text-2xl md:text-center flex-1">
                    {value.type}
                </dt>
                <dd>
                    {value.description}
                </dd>
            </div>)
        }
    </dl>;
}

export default function Planning() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>
                Planning
            </HeroHeading>
        </Hero>
        <div className="p-2">
            <p>
                OMEGA aims to put a selection of games on each year, normally falling under one of two types:
            </p>
            <GameDescriptions/>
            <h2 className="text-3xl py-3">Running a game with us</h2>
            <p>
                OMEGA are always looking for new game designs to run online.
                The Steering Committee will put out a call for game pitches.
                Games can be in any state at this point - maybe you just have a good idea for a game,
                maybe you have a full design ready to go.
                If your game is selected for the OMEGA calendar, then the Steering Committee will work
                with you and help with marketing, logistics and any technical issues you might have.
            </p>
            <h3 className="text-2xl pt-2">
                Existing in-person designs
            </h3>
            <p>
                If you have an existing megagame design that you've run in person and want to run online,
                the team at OMEGA has an existing track record of porting games to an online format.
            </p>
            <p>
                If you're interested in having your game ported, feel free to get in touch and see how
                we can help you.
            </p>
            <h2 className="text-3xl py-3">Help to run games</h2>
            <p>
                The OMEGA group is always looks for people to help run games, either by providing
                technical expertise or by being part of the Control team. Being part of the Control team
                for a megagame every so often is highly recommended, especially for those who play a
                lot of games!
            </p>
        </div>
    </React.Fragment>
}
