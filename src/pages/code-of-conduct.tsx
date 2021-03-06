import React from "react";
import {Hero, HeroHeading, MainContent} from "../components/Hero";

export default function CodeOfConduct() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>Code of conduct</HeroHeading>
        </Hero>
        <MainContent>
            <p className="text-2xl py-2">
                OMEGA believes in promoting diversity and inclusion - it’s the best and healthiest way to help the
                megagame community grow, and it’s the right thing to do.
            </p>

            <p className="py-2">To that end:</p>
            <ol className="list-decimal px-5 py-2">
                <li className="py-1">It will always be our highest priority to ensure that the megagames we run are safe environments for
                    the players and the control team.
                </li>
                <li className="py-1">All forms of discrimination, including sexism, racism, homophobia and transphobia, are unacceptable
                    at games run by OMEGA, and may result in expulsion from the game without further discussion.
                </li>
                <li className="py-1">Any harassment or abuse of players or Control is likewise unacceptable and may also result in
                    expulsion from the game without further discussion.
                </li>
                <li className="py-1">Players at one of our games experiencing discriminatory or abusive behaviour are encouraged to
                    report it immediately to the Control team for the game, who will treat it with the utmost
                    seriousness.
                </li>
                <li className="py-1">Note: we are aware that megagames include elements of roleplaying - and some of our games do include
                    mature themes - and that good-faith attempts to roleplay aggressive or demanding characters may
                    nevertheless be upsetting to others. Where appropriate, we will discuss these situations with
                    players, and provided they are willing to change their behaviour accordingly, no further action will
                    be taken.
                </li>
            </ol>

            <p className="py-2">
                We understand that there is always room for improvement in the area of diversity and inclusion, and we
                welcome feedback on this code of conduct or any other aspect of how we manage our games and community.
            </p>
        </MainContent>
    </React.Fragment>
}
