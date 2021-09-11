import React from "react";
import {Hero, HeroHeading, MainContent} from "../components/Hero";

type MegagameVideoProps = { title: string, youtubeID: string };

function MegagameVideo({youtubeID, title}: MegagameVideoProps) {
    return <div className="responsive-width py-2 px-2 flex flex-col">
        <h3 className="flex-1 text-xl font-bold text-center pb-4">{title}</h3>
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={`https://www.youtube.com/embed/${youtubeID}`} title={`YouTube video player: ${title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
        </div>
    </div>
}

function MegagameVideos() {
    const videos: MegagameVideoProps[] = [
        {
            youtubeID: 'hN71v9H_gg8',
            title: 'Watch The Skies - Shut Up & Sit Down Play a Goddamn Megagame!'
        },
        {
            youtubeID: '4u0fP25AtFg',
            title: 'Shut Up & Sit Down Play Watch the Skies 2: Part 1'
        },
        {
            youtubeID: 'M9xbUJ2tuHE',
            title: 'Shut Up & Sit Down Play Watch the Skies 2: Part 2'
        }
    ];

    return <div className="flex flex-col md:flex-row md:flex-wrap w-full justify-center">
        {
            videos.map(value => <MegagameVideo title={value.title} youtubeID={value.youtubeID} key={value.youtubeID}/>)
        }
    </div>
}

export default function AboutMegagames() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>What is a megagame?</HeroHeading>
        </Hero>
        <MainContent>
            <p className="py-2">
                Megagames are large-scale simulations with elements of strategy, diplomacy, and role-playing.
            </p>

            <p>
                Their origin lies in government wargaming exercises - initially designed for training leaders and
                informing policy, the format has since expanded to a growing hobbyist audience. Themes have expanded
                too, with recent megagames covering every topic from zombie outbreaks to high-school drama.
            </p>

            <p className="py-2">
                Megagames usually include a wide range of roles - from purely operational (moving armies around a map,
                managing resources and trade agreements) to purely interpersonal (chief negotiator, or ace reporter)
                with plenty in between. As with real life, megagames rarely have explicit victory conditions and
                explicit winners and losers, instead encouraging players to engage creatively with the scenario and
                engineer a good outcome.
            </p>

            <p className="py-2">
                Whatever your preferred form of tabletop gaming, you’ll find something in megagames that excites you -
                grand strategy, alliances and betrayals, and roleplaying. We hope to see you at one soon!
            </p>

            <h2 className="text-2xl py-2 font-bold">
                Videos
            </h2>

            <p className="py-2">
                In 2015, popular UK Board Game site <a href="https://www.shutupandsitdown.com/">Shut Up & Sit
                Down</a> were invited to come and film the first run of Jim Wallman's Watch The Skies, heralding a major
                explosion of interest in the hobby. These videos are a great introduction to how a megagame can play.
            </p>
            <MegagameVideos/>
        </MainContent>
    </React.Fragment>
}
