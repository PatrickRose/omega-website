import PodcastRepository from "./index";
import { Either, isLeft } from "fp-ts/Either";
import { OmegaDate, PodcastEpisode } from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import Parser from "rss-parser";

export const RSS_URL = "https://anchor.fm/s/2244db2c/podcast/rss";

export class RssRepository implements PodcastRepository {
    private readonly rssUrl: string;
    private rssParser: Parser;

    constructor(rssUrl: string) {
        this.rssUrl = rssUrl;

        this.rssParser = new Parser<{}, {}>();
    }

    all(): Promise<Either<false, PodcastEpisode[]>> {
        return this.rssParser
            .parseURL(this.rssUrl)
            .then(this.convertToEpisodes)
            .catch((reason) => {
                console.log(reason);
                return MakeLeft(false);
            });
    }

    async get(id: string): Promise<Either<false, PodcastEpisode>> {
        const all = await this.all();

        if (isLeft(all)) {
            return all;
        }

        for (const episode of all.right) {
            if (`${episode.number}` == id) {
                return MakeRight(episode);
            }
        }

        return MakeLeft(false);
    }

    static APIInstance(): RssRepository {
        return new RssRepository(RSS_URL);
    }

    private convertToEpisodes(
        output: Parser.Output<{}>
    ): Either<false, PodcastEpisode[]> {
        const toReturn: PodcastEpisode[] = output.items.map((item) => {
            const pubDate = new Date(item.pubDate ?? "");

            return {
                number: item.guid ?? "",
                title: item.title ?? "",
                link: item.link ?? "",
                audioLink: item.enclosure?.url ?? "",
                description: item.contentSnippet ?? "",
                date: {
                    day: pubDate.getDay() as OmegaDate["day"],
                    month: (pubDate.getMonth() + 1) as OmegaDate["month"],
                    year: pubDate.getFullYear()
                }
            };
        });

        return MakeRight(toReturn);
    }
}
