import {Either} from "fp-ts/Either";
import {Game} from "../../../client/src/types/types";
import {MemoryRepository} from "./memory";

export default interface GamesRepository {
    all: () => Either<Error, Game[]>
    get: (id: string) => Either<Error, Game>
}

export function getGamesRepo(): GamesRepository {
    return MemoryRepository.APIInstance();
}
