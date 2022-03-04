import PodcastRepository from "./index";
import {Either} from "fp-ts/Either";
import {PodcastEpisode} from "../../../types/types";
import {MakeRight} from "../../../utils/io-ts-helpers";

const EPISODES: PodcastEpisode[] = [
    {
        number: 1,
        title: "How to play PBEM Games",
        link: "https://www.dropbox.com/s/pgqza0t3r1wmn7s/Ep%201%20How%20to%20Play%20PbEm%20Games.mp3?dl=0",
        description: 'Steph, Stu and Kyle discuss the basics of how to play a Play-by-Email game'
    },
    {
        number: 1.5,
        title: "PBEM Stories",
        link: "https://www.dropbox.com/s/d3077kixfl3fmke/Ep%201.5%20PbEm%20Stories.mp3?dl=0",
        description: "Steph, Stu and Kyle talk about some of the stories from Play-by-Email games that they've played and ran"
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
