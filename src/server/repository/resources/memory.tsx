import React from "react";
import { GameResourceProps } from "../../../components/DesignerResource";
import { Councils } from "./councils/councils";
import GodsWars from "./gods-wars/gods-wars";
import Tempest from "./tempest/tempest";
import RunningHot from "./running-hot/running-hot";


const RESOURCES: { [key in GameResourceProps["id"]]: GameResourceProps } = {
    'councils-of-elporia': {
        id: 'councils-of-elporia',
        resourceType: 'site',
        gameName: 'Councils of Elporia',
        type: "Online game",
        designerName: "Benjamin Kanelos, based on As Thou Commands by Peter Nixon",
        details: <React.Fragment>
            <p>
                As Thou Commands is a rules-light mass player experience (megagame) where the players procedurally
                generate and run fictional feudal Duchies. These Duchies comprise an entire medieval Kingdom, and
                players’ decisions will have impacts both near and far. Play alternates between drafting narrative
                elements and participating in council sessions where players attempt to negotiate beneficial outcomes to
                thorny issues bedeviling the Kingdom.
            </p>
            <p>
                While the narrative elements created by the players will be edited by moderators to enforce tonal
                homogeneity between the Duchies (in a collaborative manner with player input), players will have a large
                say over the broader narrative universe in which the Kingdom exists. As Thou Commands aims to be a
                collaborative storytelling experience as much as an emulation of medieval power politics.
            </p>
        </React.Fragment>,
        content: <Councils />
    },
    'gods-wars': {
        id: 'gods-wars',
        resourceType: 'site',
        gameName: 'Gods\' Wars',
        type: 'Play-By-Email',
        designerName: 'Steph Rothman',
        details: <React.Fragment>
            <p>
                You are a demigod, a child of one of the Olympian Gods, invited to London to compete in the Gods’ Wars.
                With what you assume is a little bit of divine intervention, your dream job and lodgings are
                conveniently available there for you to easily relocate and participate.
            </p>
            <p>
                The Gods’ Wars - a competition among demigods in which the winners become Gods themselves- have been run
                countless times across countless worlds, with countless themes. Demigods have intervened to rig
                elections, intercede in succession crises, start wars, and more! This time, the Olympians of the Greek
                pantheon are hosting it and the theme is love.
            </p>
        </React.Fragment>,
        content: <GodsWars />
    },
    "tempest": {
        id: 'tempest',
        resourceType: 'site',
        gameName: 'Tempest',
        type: 'Play-By-Email',
        designerName: 'Stuart Martyn',
        details: <React.Fragment>
            <p>
                Tempest is a play by e-mail game set in an ocean wracked by impossible, immobile storms for as long as mortal memory. The few who have braved it bring back treasures and strange rumours of what lies beyond are whispered throughout the world. Cities of the living dead. Unspeakable creatures that live beneath the waves. The unnatural storms receded a few weeks ago. Cautiously, the powers that neighbour this tempestuous sea sent ships to explore. What waits out there in the dark? What caused the impossible storms, and why have they stopped now? A game of exploration, politics and horror.
            </p>
        </React.Fragment>,
        content: <Tempest />
    },
    "aftermath": {
        id: "aftermath",
        resourceType: "external",
        gameName: "Aftermath",
        type: "Online game",
        designerName: "Zane Gunton (original game), adaption by OMEGA team",
        details: <React.Fragment>
            <p>
                The world just ended. What comes next?
            </p>
            <p>
                Funny how no one really thinks about what comes next.
            </p>
            <p>
                Something happened, and the world turned upside-down. No one really knows what it was, this event – you could go mad speculating, and I know a few people who did. One or two others went looking for answers... we never saw them again. Good people, the kind we couldn’t afford to lose... but it ate them up. What does it matter, here in the aftermath?
            </p>
        </React.Fragment>,
        link: 'https://docs.google.com/document/d/1T0SpjICaD2B5VfuJnj37kmolfVKP83j-/edit'
    },
    "red-planet-rising": {
        id: "red-planet-rising",
        resourceType: "external",
        gameName: "Red Planet Rising",
        type: "Online game",
        designerName: "Andrew Shiel Dods",
        details: <React.Fragment>
            <p>
                A century after the colonization of Mars, disaster struck, and the survivors of the once-great colony now vie for supremacy amongst themselves.
            </p>
        </React.Fragment>,
        link: 'https://drive.google.com/file/d/1TyW8vZ2KUTOPzE92c2VDG4Z7MUyDorHh/view?usp=sharing'
    },
    'running-hot': {
        id: 'running-hot',
        resourceType: "site",
        gameName: "Running Hot",
        type: "Online game",
        designerName: "Patrick Rose",
        details: <React.Fragment>
            <p>
                In the near future, Britain is facing economic ruin. Following the success of the “Megacorp” experiment in the United States they attempt to do the same – they offer several multi-billion corporations the chance to buy a large part of the British landscape and create their own city state, where they can make their own laws if they wish.
            </p>
        </React.Fragment>,
        content: <RunningHot />
    }
}

export default RESOURCES;
