import { Either } from "fp-ts/lib/Either";
import { DBUser } from "../../../types/types";
import { MongoRepository } from "./mongo";

export default interface UserRepository {
    get: (id: string) => Promise<Either<false, DBUser>>;
    insert: (id: string) => Promise<Either<string, true>>;
    update: (id: string, user: DBUser) => Promise<Either<string, true>>;
}

export function getUserRepo(): Either<string, UserRepository> {
    return MongoRepository.APIInstance();
}
