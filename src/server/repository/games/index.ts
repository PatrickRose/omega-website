import { Either } from "fp-ts/Either";
import { MongoRepository } from "./mongo";
import { Game } from "../../../types/types";

export default interface GamesRepository {
    all: () => Promise<Either<false, Game[]>>
    get: (id: string) => Promise<Either<false, Game>>

    upcomingEvents(limit: number): Promise<Either<false, Game[]>>;
}

export function getGamesRepo(): GamesRepository {
    return MongoRepository.APIInstance();
}
