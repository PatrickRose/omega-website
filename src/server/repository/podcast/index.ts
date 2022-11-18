import { Either } from "fp-ts/lib/Either";
import { PodcastEpisode } from "../../../types/types";
import { MakeRight } from "../../../utils/io-ts-helpers";
import { RssRepository } from "./rss";

export default interface PodcastRepository {
    all: () => Promise<Either<false, PodcastEpisode[]>>;

    get(id: string): Promise<Either<false, PodcastEpisode>>;
}

export function getPodcastRepo(): Either<string, PodcastRepository> {
    return MakeRight(RssRepository.APIInstance());
}
