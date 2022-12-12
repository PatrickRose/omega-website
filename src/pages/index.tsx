import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { isLeft, isRight } from "fp-ts/Either";
import { getGamesRepo } from "../server/repository/games";
import Link from "next/link";
import Image from "next/image";
import { LinkDef } from "../utils/utils";
import { Hero, HeroHeading, MainContent } from "../components/Hero";
import { Game } from "../types/types";
import godsWar from "../../public/gods-wars.jpg";

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
];

function HomePageLinks() {
    return (
        <div className="flex flex-col justify-center pb-16 sm:flex-row">
            {homeLinks.map((value) => (
                <Link
                    href={value.linkPath}
                    key={value.linkText}
                    className="btn-link m-4 flex flex-1 flex-col justify-center border-2 p-4 sm:m-1"
                >
                    {value.linkText}
                </Link>
            ))}
        </div>
    );
}

function Megagame({ value }: { value: Game }) {
    return (
        <div className="flex flex-1 flex-col px-3">
            <h3 className="pb-2 text-center text-xl">
                <Link href={`/games/${value._id}`}>{value.name}</Link>
            </h3>
            <p className="flex-1">{value.preamble}</p>
            <div className="flex">
                <Link
                    href={`/games/${value._id}`}
                    className="btn-link m-4 w-full p-4"
                >
                    Book a space
                </Link>
            </div>
        </div>
    );
}

function UpcomingEvents({ events }: { events: Game[] }) {
    let eventList;

    if (events.length === 0) {
        eventList = (
            <div>
                <p>We don&apos;t have any upcoming events announced yet!</p>
                <p>
                    However, feel free to look at{" "}
                    <Link href="/games#past">our past games</Link>
                </p>
            </div>
        );
    } else {
        eventList = (
            <div className="flex flex-col sm:flex-row lg:w-3/4">
                {" "}
                {events.map((value) => (
                    <Megagame
                        value={value}
                        key={value._id}
                    />
                ))}
            </div>
        );
    }

    return <div className="flex w-full justify-center p-4">{eventList}</div>;
}

export const getStaticProps: GetStaticProps<{
    upcomingGames: Game[];
}> = async () => {
    const gamesRepo = getGamesRepo();

    if (isLeft(gamesRepo)) {
        return {
            props: {
                upcomingGames: []
            }
        };
    }

    const upcomingGames = await gamesRepo.right.upcomingEvents(3);

    return {
        props: {
            upcomingGames: isRight(upcomingGames) ? upcomingGames.right : []
        },
        revalidate: 60
    };
};

export default function Home({
    upcomingGames
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>
                    OMEGA hosts and produces online megagames.
                </HeroHeading>
                <p className="pb-16 text-xl">
                    From grand strategy to roleplay, economics to fireballs, our
                    games blend serious political simulation with emergent
                    storytelling in settings both mundane and fantastical.
                </p>
                <HomePageLinks />
            </Hero>
            <MainContent>
                <h2 className="text-2xl">Our next events</h2>
                <UpcomingEvents events={upcomingGames} />
                <div className="flex w-full justify-center">
                    <Image
                        src={godsWar}
                        className="lg:w-2/4"
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }}
                    />
                </div>
            </MainContent>
        </React.Fragment>
    );
}
