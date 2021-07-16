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
            homeLinks.map(value => <Link className="flex-1 flex justify-center flex-col sm:m-1 m-4 p-4 btn-link" to={value.linkPath} key={value.linkText}>
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
        <div className="flex-auto px-4">
            <h2 className="text-2xl">Our next events</h2>
            <div className="w-full flex flex-col sm:flex-row ">
                {
                    [
                        {heading: 'Online megagame', link:'/games/RH210808'},
                        {heading: 'Play by Email', link:'/games/RH210812'},
                        {heading: 'Non megagame', link:'/events/...'},
                    ].map(value => <div className="flex-1" key={value.link}>
                        <h3 className="text-center"><Link to={value.link}>{value.heading}</Link></h3>
                        <p>Lorem ipsum</p>
                    </div>)
                }
            </div>
        </div>
    </React.Fragment>;
}

