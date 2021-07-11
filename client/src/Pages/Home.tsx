import React from "react";
import {Link} from "react-router-dom";
import {LinkDef} from "../utils/utils";
import {Hero, HeroHeading} from "../components/Hero";

const homeLinks:LinkDef[] = [
    {
        linkPath: "games",
        linkText: "See our upcoming games, and book a space"
    },
    {
        linkPath: "games",
        linkText: "What is a megagame? Find out more!"
    },
    {
        linkPath: "games",
        linkText: "Join our planning team, or pitch your game design"
    }
]

function HomePageLinks() {
    return <div className="flex justify-center sm:px-4 pb-16 flex-col sm:flex-row">
        {
            homeLinks.map(value => <Link className="flex-1 flex justify-center flex-col sm:m-1 m-4 rounded border-2 border-gray-800 duration-500 bg-omega-dark text-white hover:text-black text-center p-4 transition-colors hover:bg-omega-light" to={value.linkPath} key={value.linkText}>
                {value.linkText}
            </Link>)
        }
    </div>
}

export default function Home() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>
                OMEGA hosts and produces online megagames.
            </HeroHeading>
            <p className="text-xl pb-16 px-4">
                From grand strategy to roleplay, economics to fireballs, our games blend serious
                political simulation with emergent storytelling in settings both mundane and fantastical.
            </p>
            <HomePageLinks />
        </Hero>
        <div className="flex-auto">

            <div className="px-4">
                A BUNCH OF FILLER CONTENT SHOULD PROBABLY GO HERE
            </div>
        </div>
    </React.Fragment>;
}

