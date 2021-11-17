import { Either } from "fp-ts/Either";
import { MemoryRepository } from "./memory";
import { Game } from "../../../types/types";

export default interface GamesRepository {
    all: () => Promise<Either<Error, Game[]>>
    get: (id: string) => Promise<Either<Error, Game>>

    upcomingEvents(limit: number): Promise<Either<Error, Game[]>>;
}

export function getGamesRepo(): GamesRepository {
    return MemoryRepository.APIInstance();
}
