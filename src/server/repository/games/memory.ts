import GamesRepository from "./index";

import {Either} from "fp-ts/Either";
import {Game} from "../../../types/types";
import {MakeLeft, MakeRight} from "../../../utils/io-ts-helpers";
import {dateSorter, getJSDateFromGameDate} from "../../../utils";


const allGames: Game[] = [
    {
        "id": "RPR201212",
        "name": "Red Planet Rising",
        "date": {
            "year": 2020,
            "month": 12,
            "day": 12
        },
        "designer": "Andrew Shiel Dods",
        "preamble": "A century after the colonization of Mars, disaster struck, and the survivors of the once-great colony now vie for supremacy amongst themselves.",
        "fullDescription": `We are thrilled to announce that with the support of the game's designer, we will be running ‘Red Planet Rising,’ a True North Megagame. Red Planet Rising is a science fiction economic and political megagame, set in the ruined husk of Mariner Valley, once Earth's greatest colony on Mars.

A century after the colonization of Mars, disaster struck, and the survivors of the once-great colony now vie for supremacy amongst themselves.

Players will take on leadership roles among the various factions in Mariner Valley, produce and trade resources, explore, and form governments and alliances in this 4X-inspired experience.

[Ticketing now available!](https://www.eventbrite.com/e/red-planet-rising-december-2020-tickets-125268155425)`,
        "type": "Online game"
    },
    {
        "id": "RH210227",
        "name": "Running Hot",
        "date": {
            "year": 2021,
            "month": 2,
            "day": 27
        },
        "designer": "Patrick Rose",
        "preamble": "In the near future, Britain is facing economic ruin. Following the success of the “Megacorp” experiment in the United States they attempt to do the same – they offer several multi-billion corporations the chance to buy a large part of the British landscape and create their own city state, where they can make their own laws if they wish.",
        "fullDescription": `We are proud to announce the third running of Running Hot, which debuted at Online Megagame Con earlier this year, featuring the designer Patrick Rose. I was able to play in the first two games, and we've made substantial improvements since then, that we're excited to show you.

[Tickets available through Eventbrite now!](https://www.eventbrite.com/e/running-hot-february-27-2021-tickets-131734201543)

Running Hot is a “pre-cyberpunk” megagame. Players will play either the corporations trying to make money and further their political agendas or the runners who are the deniable resources that the corporations may use to achieve said resources. This game takes a slightly different tack to most cyberpunk settings, in that the game will explore the beginning of the dystopia that is to be expected of a cyberpunk setting. `,
        "type": "Online game"
    },
    {
        "id": "ATC210522",
        "name": "As Thou Commands",
        "date": {
            "year": 2021,
            "month": 5,
            "day": 22
        },
        "designer": "Peter Nixon (original design), Benjamin Kanelos (development)",
        "preamble": "Inspired by Horrible Games The King's Dilemma, As Thou Commands is a council-driven megagame where players cooperatively generate a medieval kingdom and then try to shape its path through history.",
        "fullDescription": `The monarch has united the realm and birthed a new kingdom. That was the easy part... Now it's time to carve the land into duchies and rule over them. What will your noble house prioritize? Will you make friends or enemies with your neighbors? Will the kingdom survive or fall apart and be forgotten? Your choices decide!

As Thou Commands is a rules-light megagame where the players create and run fictional feudal duchies. These duchies comprise an entire medieval kingdom, and players’ decisions will have impacts both near and far. Play alternates between drafting narrative elements and participating in council sessions where players will try to negotiate beneficial outcomes to the thorny issues bedeviling the kingdom.

[Tickets available through EventBrite](https://www.eventbrite.com/e/as-thou-commands-tickets-149484892337)`,
        "type": "Online game"
    },
    {
        "id": "RH210807",
        "name": "Running Hot",
        "date": {
            "year": 2021,
            "month": 8,
            "day": 7
        },
        "designer": "Patrick Rose",
        "preamble": "In the near future, Britain is facing economic ruin. Following the success of the “Megacorp” experiment in the United States they attempt to do the same – they offer several multi-billion corporations the chance to buy a large part of the British landscape and create their own city state, where they can make their own laws if they wish.",
        "fullDescription": `We are proud to announce the fifth running of Running Hot, which debuted at Online Megagame Con earlier this year, featuring the designer Patrick Rose. I was able to play in the first two games, and we've made substantial improvements since then, that we're excited to show you.

Running Hot is a “pre-cyberpunk” megagame. Players will play either the corporations trying to make money and further their political agendas or the runners who are the deniable resources that the corporations may use to achieve said resources. This game takes a slightly different tack to most cyberpunk settings, in that the game will explore the beginning of the dystopia that is to be expected of a cyberpunk setting. 

[Tickets available through Eventbrite now!](https://www.eventbrite.com/e/running-hot-august-7-2021-tickets-149489309549)`,
        "type": "Online game"
    },
    {
        "id": "TATP210508",
        "name": "Club Games (The Assault, The Plan)",
        "date": {
            "year": 2021,
            "month": 5,
            "day": 8
        },
        "designer": "Jim Wallman",
        "preamble": "Join the OMEGA community for two short length megagame-like experiences (The Assault and The Plan)",
        "fullDescription": `Join the OMEGA community as they play two short length megagame-experiences, designed by [Jim Wallman](https://www.stonepaperscissors.co.uk/) (*Watch The Skies*, *Urban Nightmare*)
        
[To sign up, please fill out this Google Docs spreadsheet](https://docs.google.com/spreadsheets/d/1NsVZn-Zbw-xT0eFgzN6x59P7W0mNEUAgeMv5p7QgFXY/edit?fbclid=IwAR2PV7SrxWcQdwUGHlaAI_nxIDfPRTIgov7l-qNTaxF5z3UCE6IL9lGeVcg#gid=0)

### The Plan

The Game about Negotiation, Committees and Planning

The Plan is a game ostensibly about a strategic planning committee in a time of war. The players are the key senior decision makers and planners of 'Freedonia'. In the game they have to communicate, negotiate and problem solve with their fellow committee members to come up with a successful War Plan.

### The Assault

Good vs Evil… vs personal gain?

A fantasy-themed Council meeting game looking at interpersonal behaviours whilst planning the final assault to overthrow the Dark Lord.

The forces of Good have been struggling against the onslaught of the Dark Lord for many years, and, after many reverses, trials and setbacks, finally the tide has turned. A Grand Alliance of Humans, Dwarves, Free Folk and Elves have thrown back the Hordes of the Dark Lord, back to the lair of that master of Evil in the famous (and feared) Warlock Castle in the land of Daunt. Now is the moment of the final campaign to enter the Dark Lord's Domain and rid the world of this evil, once and for all.

The players represent leaders of the Grand Alliance of Good Folk. Each of the elements of the Alliance has been fighting the Dark Lord's forces for many years. The leaders of these contingents form the Council Of Good.
`,
        "type": "Online game"
    },
    {
        "id": "UR20210727",
        "name": "Ur: Cataclysm",
        "date": {
            "year": 2021,
            "month": 7,
            "day": 27
        },
        "endDate": {
            "year": 2021,
            "month": 8,
            "day": 15
        },
        "designer": "John Keyworth",
        "preamble": "A great pre-godswar civilization on the world of “Lumen” falls in a great cataclysm.",
        "fullDescription": `Ur: Cataclysm is a low-commitment PBEM game that takes place over 3 weeks. It is set in the same fantasy universe as last year’s Ur: Nexus City game but is mechanically very different.

The game focuses on a mystery, so further information will only be forthcoming once you have been cast.

Sign ups close on the 18th July and the game will take place between the 27th of July and the 15th of August. Please fill out this questionnaire to sign up, it is not first come first serve instead we will use a lottery system to choose players.

* The format for this game will be quite different to previous OMEGA PBEMs.
* You do not have to have played the last Ur game to play this one, and it does not follow on directly from the events of the first game.
* We will happily answer questions about the game, but some details will remain secret.

[To sign up, fill in this Google Form](https://forms.gle/aVhZcBraMcLjeHPD8)
`,
        "type": "Play-By-Email"
    },
    {
        id: "AL20211701",
        name: "Afterlife",
        date: {
            month: 1,
            day: 17,
            year: 2021
        },
        endDate: {
            month: 3,
            day: 7,
            year: 2021
        },
        preamble: "You died. After death you emerged from the river, your memory shot to pieces, in the city of the dead. Unlock your memories. Choose your path. Decide the future of the afterlife.",
        designer: "Stuart Martyn",
        fullDescription: `You died. After death you emerged from the river, your memory shot to pieces, in the city of the dead.

The Necropolis is a bizarre city. Everything here – even the objects - is a ghost, a memory. The buildings that stand here all collapsed into rubble on Earth. Modern skyscrapers stand alongside Gothic cathedrals and earthwork huts. Souls walks the patchwork streets dressed in rags, tee-shirts, ballgowns and clanking metal armour.
For longer than most souls can remember, the Silent King sat upon his throne in an ancient tower at the heart of the city. The Silent King was a distant and feared ruler with the power to strip away the memories of his subjects. Under his regime fragments of memory and self became a form of currency. But now the Silent King has disappeared. His throne lies vacant and many of the dead look upon it with envious or fearful eyes.

In a world without permanent death it is difficult to seize the throne by force. Any claimant must rally support, find a way to win the loyalty of other souls, before they ascend the Throne. Angels and demons lurk on the periphery of the political conflict, empowering those who accept their gifts.

Most of the poorest souls are now little more than shells of what they once were, engaged in their labour or wandering listlessly through the streets. With the King’s demise, souls have noticed some of their memories returning to them. These memories bring the purpose some yearn for and unlock the power craved by others. The fight for the Throne is something many have little interest in; with the Silent King gone, perhaps the afterlife can change in more than just political terms. Perhaps there are other ways to live after death.

Unlock your memories. Choose your path. Decide the future of the afterlife.`,
        type: "Play-By-Email",
    },
    {
        "id": "DC20210727",
        "name": "Dusk City By Night",
        "date": {
            "year": 2021,
            "month": 5,
            "day": 16
        },
        "endDate": {
            "year": 2021,
            "month": 7,
            "day": 16
        },
        "designer": "Kyle Tinga",
        "preamble": "Once, you lived in slumber, existing idly among the masses without any understanding of the truths of the world. But you were chosen, snatched from the threshold between life and death, given the secrets to eternal life and an ever-present hunger in your soul.",
        "fullDescription": `Once, you lived in slumber, existing idly among the masses without any understanding of the truths of the world. But you were chosen, snatched from the threshold between life and death, given the secrets to eternal life and an ever-present hunger in your soul. You have joined the ranks of the Awakened - immortals with powers far beyond human understanding, weakened in sunlight and bound in blood, pursued by the eternal spectre of the creature known as HIM.

You and your brethren coexist in an uneasy truce, battle lines drawn in ideology instead of violence. Some believe in power and dominance over humanity, banding together to create a world for the Awakened. Some have made it their calling to shepherd mankind, believing themselves truly just in their manipulations. Some wish to coexist peacefully with the Unawakened, stifling the hunger that gnaws incessantly within them. And some walk their own path, beholden to no gods or masters.

By purpose or coincidence you have found yourself in the City of Doxley, hiding from the ever-watchful eye of HIM. It is a place of darkened alleyways and shattered dreams, of haves living gated lives, separated from have nots. A place ripe for the picking. On these streets, human life lacks meaning to the Awakened, valuable only as a commodity, fuel for the ceaseless hunger of their kin, pawns in games of deceit. Yet hope blossoms even in the smallest of places. Mankind has risen up, their hopes and dreams rising with them, ushering in a new age where your kind may no longer be needed.

Of course, as all things grow, so must all things change.

The Keeper of the city, your guardian and protector, has announced his intent to relinquish his position. There is a ripple of unease in each of you, a realization that without the Keeper HE may soon arrive at your doorstep. It is imperative the Land be protected, imperative that one of us is bound as its Keeper so that many will survive. The highest honor an Awakened may have, and the greatest sacrifice they shall undertake. A Selection must be initiated. A worthy successor must be found.

Fight for the right to be the city’s protector, or aid in the quest to find one suitable for the task. Gain Influence by resolving society’s ills or benefit from its decline. Feed the beast within, or deny it. Forge valuable bonds that may make or break you. And, above all things, remember that you are not the only one who sees what you are in the dark.
`,
        "type": "Play-By-Email"
    },
];

export class MemoryRepository implements GamesRepository {
    private games: Game[];

    static APIInstance(): MemoryRepository {
        return new MemoryRepository(allGames)
    }

    constructor(games: Game[]) {
        this.games = games;
    }

    upcomingEvents(limit: number): Either<Error, Game[]> {
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);

        const games: Game[] = this.games.filter(
            (game: Game): boolean => {
                return getJSDateFromGameDate(game.date) >= currDate
            }
        )
        games.sort(dateSorter);

        return MakeRight(games.slice(0, limit));
    }

    all(): Either<Error, Game[]> {
        return {
            _tag: 'Right',
            right: this.games
        }
    }

    get(id: string): Either<Error, Game> {
        for (let game of this.games) {
            if (game.id === id) {
                return MakeRight(game);
            }
        }

        return MakeLeft(new Error(`Game with id ${id} not found`));
    }
}
