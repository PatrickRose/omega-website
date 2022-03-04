import { Either } from "fp-ts/lib/Either";
import { PodcastEpisode} from "../../../types/types";
import { MemoryRepository } from "./memory";
import {MakeRight} from "../../../utils/io-ts-helpers";

export default interface PodcastRepository {
    all: () => Promise<Either<false, PodcastEpisode[]>>
}

export function getPodcastRepo(): Either<string, PodcastRepository> {
    return MakeRight(MemoryRepository.APIInstance());
}
