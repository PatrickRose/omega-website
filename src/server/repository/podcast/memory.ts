import PodcastRepository from "./index";
import {Either} from "fp-ts/Either";
import {PodcastEpisode} from "../../../types/types";
import {MakeRight} from "../../../utils/io-ts-helpers";

const EPISODES: PodcastEpisode[] = [
    {
        number: 1,
        title: "How to play PBEM Games",
        link: "https://www.dropbox.com/s/pgqza0t3r1wmn7s/Ep%201%20How%20to%20Play%20PbEm%20Games.mp3?dl=0",
        description: 'Steph, Stu and Kyle discuss the basics of how to play a Play-by-Email game. Not sure what one is or how to get involved? This episode will give you a step-by-step introduction to Play by Email games!  If you’re a veteran, you can skip this one.'
    },
    {
        number: 1.5,
        title: "PBEM Stories",
        link: "https://www.dropbox.com/s/d3077kixfl3fmke/Ep%201.5%20PbEm%20Stories.mp3?dl=0",
        description: "Play-by-email games are not just about mechanics, but the memories you make along the way. In this episode, Steph, Stu, and Kyle talk about some of their favorite stories from Play-by-Email games that they’ve played in and ran."
    },
]

export class MemoryRepository implements PodcastRepository {
    constructor(private episodes: PodcastEpisode[]) {
    }

    async all(): Promise<Either<false, PodcastEpisode[]>> {
        return MakeRight(this.episodes);
    }

    static APIInstance(): MemoryRepository {
        return new MemoryRepository(EPISODES);
    }
}
