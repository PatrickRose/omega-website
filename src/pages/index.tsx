import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { isRight } from "fp-ts/Either";
import { getGamesRepo } from "../server/repository/games";
import Link from "next/link";
import Image from "next/image";
import { LinkDef } from "../utils/utils";
import { Hero, HeroHeading, MainContent } from "../components/Hero";
import { Game } from "../types/types";
import { apiCall } from "../utils/api";
import { UpcomingEventsAPIDecode } from "../types/io-ts-def";
import { TextRow } from "../components/Placeholders";
import godsWar from '../../public/gods-wars.jpg';

const homeLinks: LinkDef[] = [
    {
        linkPath: "/games",
        linkText: "See our upcoming games, and book a space"
    },
    {
        linkPath: "/about-megagames",
        linkText: "What is a megagame? Find out more!"
    },
    {
        linkPath: "/planning",
        linkText: "Join our planning team, or pitch your game design"
    }
]

function HomePageLinks() {
    return <div className="flex justify-center pb-16 flex-col sm:flex-row">
        {
            homeLinks.map(value => <Link
                href={value.linkPath} key={value.linkText}>
                <a className="flex-1 flex justify-center flex-col sm:m-1 m-4 p-4 btn-link border-2">
                    {value.linkText}
                </a>
            </Link>)
        }
    </div>
}

type UpcomingEventTypes = Game | number;

function Megagame({ value }: { value: Game }) {
    return <div className="flex-1 px-3 flex flex-col">
        <h3 className="text-center text-xl pb-2">
            <Link href={`/games/${value.id}`}><a>{value.name}</a></Link>
        </h3>
        <p className="flex-1">{value.preamble}</p>
        <div className="flex">
            <Link href={`/games/${value.id}`}>
                <a className="btn-link m-4 p-4 w-full">Book a space</a>
            </Link>
        </div>
    </div>
}

function UpcomingEvents({ events }: { events: Game[] }) {
    let eventList;

    if (events.length === 0) {
        eventList = <div>
            <p>We don&apos;t have any upcoming events announced yet!</p>
            <p>However, feel free to look at <Link href="/games#past">our past games</Link></p>
        </div>
    } else {
        eventList = <div className="lg:w-3/4 flex flex-col sm:flex-row"> {events.map(
            value => <Megagame value={value} key={value.id} />
        )
        }
        </div>
    }


    return <div className="w-full flex p-4 justify-center">{eventList}</div>
}

export const getStaticProps: GetStaticProps<{ upcomingGames: Game[] }> = async () => {
    const upcomingGames = getGamesRepo().upcomingEvents(3);

    return {
        props: {
            upcomingGames: isRight(upcomingGames) ? upcomingGames.right : []
        },
        revalidate: 60
    }
}

export default function Home({ upcomingGames }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <React.Fragment>
        <Hero>
            <HeroHeading>
                OMEGA hosts and produces online megagames.
            </HeroHeading>
            <p className="text-xl pb-16">
                From grand strategy to roleplay, economics to fireballs, our games blend serious
                political simulation with emergent storytelling in settings both mundane and fantastical.
            </p>
            <HomePageLinks />
        </Hero>
        <MainContent>
            <h2 className="text-2xl">Our next events</h2>
            <UpcomingEvents events={upcomingGames} />
            <div className="w-full flex justify-center">
                <Image src={godsWar} className="lg:w-2/4" alt="" />
            </div>
        </MainContent>
    </React.Fragment>;
}
