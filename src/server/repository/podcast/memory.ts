import PodcastRepository from "./index";
import {Either} from "fp-ts/Either";
import {PodcastEpisode} from "../../../types/types";
import {MakeRight} from "../../../utils/io-ts-helpers";
import {getJSDateFromOmegaDate} from "../../../utils";

const EPISODES: PodcastEpisode[] = [
    {
        number: 1,
        title: "How to play PBEM Games",
        link: "https://www.dropbox.com/s/pgqza0t3r1wmn7s/Ep%201%20How%20to%20Play%20PbEm%20Games.mp3?dl=0",
        description: 'Steph, Stu and Kyle discuss the basics of how to play a Play-by-Email game. Not sure what one is or how to get involved? This episode will give you a step-by-step introduction to Play by Email games!  If you’re a veteran, you can skip this one.',
        date: {
            day: 4,
            month: 3,
            year: 2022
        }
    },
    {
        number: 1.5,
        title: "PBEM Stories",
        link: "https://www.dropbox.com/s/d3077kixfl3fmke/Ep%201.5%20PbEm%20Stories.mp3?dl=0",
        description: "Play-by-email games are not just about mechanics, but the memories you make along the way. In this episode, Steph, Stu, and Kyle talk about some of their favorite stories from Play-by-Email games that they’ve played in and ran.",
        date: {
            day: 4,
            month: 3,
            year: 2022
        }
    },
    {
        number: 2,
        title: "Action Submissions",
        link: "https://www.dropbox.com/s/oldgcwdi256oytx/Ep%202%20Action%20Submissions.m4a?dl=0",
        description: "Join Stu, Steph, and Kyle as they discuss actions and action resolutions in Play-by-Email games. They'll cover topics like what is the scope of an action as well as strategies for getting the most out of writing action submissions.",
        date: {
            day: 11,
            month: 3,
            year: 2022
        }
    }
]

export class MemoryRepository implements PodcastRepository {
    constructor(private episodes: PodcastEpisode[]) {
    }

    async all(): Promise<Either<false, PodcastEpisode[]>> {
        const today = new Date();
        today.setHours(23, 59, 59);

        return MakeRight(this.episodes.filter((episode => getJSDateFromOmegaDate(episode.date) < today)));
    }

    static APIInstance(): MemoryRepository {
        return new MemoryRepository(EPISODES);
    }
}
