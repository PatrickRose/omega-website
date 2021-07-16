import {Either} from "fp-ts/Either";
import {MemoryRepository} from "./memory";
import {Game} from "../../../types/types";

export default interface GamesRepository {
    all: () => Either<Error, Game[]>
    get: (id: string) => Either<Error, Game>
}

export function getGamesRepo(): GamesRepository {
    return MemoryRepository.APIInstance();
}
