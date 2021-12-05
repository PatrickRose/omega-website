import { Either } from "fp-ts/Either";
import { MongoRepository } from "./mongo";
import { Game } from "../../../types/types";

export default interface GamesRepository {
    all: () => Promise<Either<false, Game[]>>
    get: (id: string) => Promise<Either<false, Game>>

    upcomingEvents(limit: number): Promise<Either<false, Game[]>>;

    insert(game: Game): Promise<Either<string, true>>;

    update(id: string, game: Game): Promise<Either<string, true>>;
}

export function getGamesRepo(): GamesRepository {
    return MongoRepository.APIInstance();
}
