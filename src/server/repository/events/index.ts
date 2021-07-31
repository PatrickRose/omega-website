import {Either} from "fp-ts/Either";
import {MemoryRepository} from "./memory";
import {OMEGAEvent} from "../../../types/types";


export default interface EventRepository {
    all: () => Either<Error, OMEGAEvent[]>
    get: (id: string) => Either<Error, OMEGAEvent>
}

export function getEventRepo(): EventRepository {
    return MemoryRepository.APIInstance();
}
