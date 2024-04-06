import React from "react";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import { ResponsiveItemList } from "../../components/ResponsiveItemList";

type MegagameVideoProps = { title: string; youtubeID: string };

function MegagameVideo({ youtubeID, title }: MegagameVideoProps) {
    return (
        <React.Fragment>
            <h3 className="flex-1 pb-4 text-center text-xl font-bold">
                {title}
            </h3>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeID}`}
                    title={`YouTube video player: ${title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </React.Fragment>
    );
}

function MegagameVideos() {
    const videos: MegagameVideoProps[] = [
        {
            youtubeID: "hN71v9H_gg8",
            title: "Watch The Skies - Shut Up & Sit Down Play a Goddamn Megagame!"
        },
        {
            youtubeID: "4u0fP25AtFg",
            title: "Shut Up & Sit Down Play Watch the Skies 2: Part 1"
        },
        {
            youtubeID: "M9xbUJ2tuHE",
            title: "Shut Up & Sit Down Play Watch the Skies 2: Part 2"
        }
    ];

    const items = videos.map((value) => (
        <MegagameVideo
            title={value.title}
            youtubeID={value.youtubeID}
            key={value.youtubeID}
        />
    ));

    return (
        <ResponsiveItemList
            items={items}
            itemClasses="flex flex-col"
        />
    );
}

export default function AboutMegagames() {
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>What is a megagame?</HeroHeading>
            </Hero>
            <MainContent>
                <p className="py-2">
                    Megagames are large-scale simulations with elements of
                    strategy, diplomacy, and role-playing.
                </p>

                <p>
                    Megagaming initially grew out of the hobbyist wargaming
                    scene in the UK, as designers sought to more faithfully
                    capture the human element in conflict. Themes have expanded
                    too, with recent megagames covering every topic from zombie
                    outbreaks to high-school drama.
                </p>

                <p className="py-2">
                    Megagames usually include a wide range of roles - from
                    purely operational (moving armies around a map, managing
                    resources and trade agreements) to purely interpersonal
                    (chief negotiator, or ace reporter) with plenty in between.
                    As with real life, megagames rarely have explicit victory
                    conditions and explicit winners and losers, instead
                    encouraging players to engage creatively with the scenario
                    and engineer a good outcome.
                </p>

                <p className="py-2">
                    A play by email megagame (PBEM) is a megagame played over a
                    period of weeks, usually with each week corresponding to a
                    turn, with players communicating via email and/or via
                    specialist apps. Most OMEGA PBEMs have used a custom app,
                    CANDI, and have had a greater focus on roleplaying and
                    narrative rather than strategy and operational play.
                </p>

                <p className="py-2">
                    Whatever your preferred form of tabletop gaming, you’ll find
                    something in megagames that excites you - grand strategy,
                    alliances and betrayals, and roleplaying. We hope to see you
                    at one soon!
                </p>

                <h2 className="py-2 text-2xl font-bold">Videos</h2>

                <p className="py-2">
                    In 2014, popular UK Board Game site{" "}
                    <a href="https://www.shutupandsitdown.com/">
                        Shut Up & Sit Down
                    </a>{" "}
                    were invited to come and film the first run of Jim
                    Wallman&apos;s Watch The Skies, heralding a major explosion
                    of interest in the hobby. These videos are a great
                    introduction to how a megagame can play.
                </p>
                <MegagameVideos />
            </MainContent>
        </React.Fragment>
    );
}
