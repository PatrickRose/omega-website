import React from "react";
import {Hero, HeroHeading, MainContent} from "../components/Hero";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {ResponsiveItemList} from "../components/ResponsiveItemList";

function ContactMethods() {
    const contactMethods: { icon: IconDefinition, title: string, description: React.ReactElement }[] = [
        {
            icon: faDiscord,
            title: 'Discord',
            description: <p>
                Most organisation, announcements and general discussions happen
                on <a href="https://discord.gg/gVxGUERQTq">our Discord server</a>.
            </p>
        },
        {
            icon: faFacebook,
            title: 'Facebook',
            description: <p>
                We also have a <a href="https://www.facebook.com/OMEGAmegagames">Facebook presence</a>, which will have
                a list of any upcoming events.
            </p>
        },
        {
            icon: faEnvelope,
            title: 'Email',
            description: <React.Fragment>
                <p>
                    You can email us at <a href="mailto:contact@omega-mega.games"
                                           title="Main email address">contact@omega-mega.games</a>.
                </p>
                <p>
                    For issues relating to the website, please
                    use <a href="mailto:webmaster@omega-mega.games"
                           title="Webmaster email address">webmaster@omega-mega.games</a>.
                </p>
            </React.Fragment>
        }
    ]


    const items = contactMethods.map(
        value => <React.Fragment>
            <FontAwesomeIcon icon={value.icon} size="10x" className="w-full" title={value.title}/>
            <h2 className="text-2xl py-4">{value.title}</h2>
            {value.description}
        </React.Fragment>
    );
    return <ResponsiveItemList items={items} itemClasses="text-center"/>;
}

export default function Contact() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>
                Contact us!
            </HeroHeading>
        </Hero>
        <MainContent>
            You can get in contact with the OMEGA team in one of the following ways
            <ContactMethods/>
        </MainContent>
    </React.Fragment>
}
