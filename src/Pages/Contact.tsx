import React from "react";
import {Hero, HeroHeading} from "../components/Hero";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

function ContactMethods() {
    const contactMethods: { icon: IconDefinition, title: string, description: React.ReactElement }[] = [
        {
            icon: faDiscord,
            title: 'Discord',
            description: <p>
                Most organisation, announcements and general discussions happen on our Discord server.
            </p>
        },
        {
            icon: faFacebook,
            title: 'Facebook',
            description: <p>
                We also have a Facebook presence, which will have a list of any upcoming events.
            </p>
        },
        {
            icon: faEnvelope,
            title: 'Email',
            description: <React.Fragment>
                <p>
                    You can email us at test@example.com
                </p>
                <p>
                    For issues relating to the website, email test@example.com
                </p>
            </React.Fragment>
        }
    ]


    return <div className="flex md:flex-row md:flex-wrap justify-center flex-col py-2">
        {
            contactMethods.map(value => <div className="basis-50 text-center px-2" key={value.title}>
                <FontAwesomeIcon icon={value.icon} size="10x" className="w-full" title={value.title}/>
                <h2 className="text-2xl py-2">{value.title}</h2>
                {value.description}
            </div>)
        }
    </div>;
}

export default function Contact() {
    return <React.Fragment>
        <Hero>
            <HeroHeading>
                Contact us!
            </HeroHeading>
        </Hero>
        <div className="p-2">
            You can get in contact with the OMEGA team in one of the following ways
            <ContactMethods/>
        </div>
    </React.Fragment>
}
