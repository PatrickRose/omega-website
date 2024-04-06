import React from "react";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";

export default function CodeOfConduct() {
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Code of conduct</HeroHeading>
            </Hero>
            <MainContent>
                <p className="py-2 text-2xl">
                    OMEGA believes in promoting diversity and inclusion - it’s
                    the best and healthiest way to help the megagame community
                    grow, and it’s the right thing to do.
                </p>

                <p className="py-2">To that end:</p>
                <ol className="list-decimal px-5 py-2">
                    <li className="py-1">
                        It will always be our highest priority to ensure that
                        the megagames we run, and the OMEGA community as a
                        whole, are safe environments for all involved.
                    </li>
                    <li className="py-1">
                        All forms of discrimination, including sexism, racism,
                        homophobia and transphobia, are unacceptable at games
                        run by OMEGA or in the OMEGA community, and may result
                        in expulsion from the game and/or the community without
                        further discussion.
                    </li>
                    <li className="py-1">
                        Any harassment or abuse of players, Control, or
                        community members is likewise unacceptable and may also
                        result in expulsion from the game or the community
                        without further discussion.
                    </li>
                    <li className="py-1">
                        Players at one of our games or elsewhere in the OMEGA
                        community who are experiencing discriminatory or abusive
                        behaviour are encouraged to report it immediately to the
                        Control team or Safety officer for the game, or a member
                        of the OMEGA Steering Committee, who will treat it with
                        the utmost seriousness.
                    </li>
                    <li className="py-1">
                        Note: we are aware that megagames include elements of
                        roleplaying - and some of our games do include mature
                        themes - and that good-faith attempts to roleplay
                        aggressive or demanding characters may nevertheless be
                        upsetting to others. Where appropriate, we will discuss
                        these situations with players, and provided they are
                        willing to change their behaviour accordingly, no
                        further action will be taken.
                    </li>
                </ol>

                <p className="py-2">
                    We understand that there is always room for improvement in
                    the area of diversity and inclusion, and we welcome feedback
                    on this code of conduct or any other aspect of how we manage
                    our games and community.
                </p>

                <p className="py-2">
                    <a
                        href="https://docs.google.com/document/d/1FaelhmttFFEtUagvbUlhohMBQEk_yVb-RTyAXpdopF8/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Please also see our Official OMEGA Disciplinary Policy
                        here.
                    </a>
                </p>

                <p className="py">
                    <a
                        href="https://docs.google.com/document/d/1AwMyFuv6i7RJ336SnN6v37jj3C_GKbQqU4gdmogYSuo/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Please also see our OMEGA by-laws here
                    </a>
                </p>
            </MainContent>
        </React.Fragment>
    );
}
