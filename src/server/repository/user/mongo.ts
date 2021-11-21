import { Either } from 'fp-ts/lib/Either';
import { MongoClient } from 'mongodb';
import { DBUser } from '../../../types/types';
import { MakeLeft, MakeRight } from '../../../utils/io-ts-helpers';
import initialiseMongo from '../../mongo';
import { hashPassword } from './argon';
import { DEFAULT_PASSWORD } from './consts';
import UserRepository from "./index";

export class MongoRepository implements UserRepository {

    constructor(private readonly mongo: MongoClient) { }

    static APIInstance(): MongoRepository {
        const client = initialiseMongo();

        return new MongoRepository(client);
    }

    async get(id: string): Promise<Either<false, DBUser>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const usersCollection = database.collection<DBUser>("users");

            const cursor = usersCollection.find<DBUser>({ _id: id });

            const user = await cursor.next();

            if (user === null) {
                return MakeLeft(false);
            }

            return MakeRight(user);
        }
        catch (e) {
            console.log(e);
            return MakeLeft(false);
        }
        finally {
            await this.mongo.close();
        }
    }

    async insert(username: string): Promise<Either<string, true>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const userCollection = database.collection<DBUser>("users");

            const user: DBUser = {
                _id: username,
                password: await hashPassword(DEFAULT_PASSWORD),
                passwordNeedsReset: true
            }

            await userCollection.insertOne(user);

            return MakeRight(true);
        }
        catch (e) {
            return MakeLeft((e as Error).message)
        }
        finally {
            await this.mongo.close();
        }
    }

    async update(username: string, user: DBUser): Promise<Either<string, true>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const userCollection = database.collection<DBUser>("users");

            await userCollection.updateOne({ _id: username }, { "$set": user });

            return MakeRight(true);
        }
        catch (e) {
            return MakeLeft((e as Error).message)
        }
        finally {
            await this.mongo.close();
        }
    }
}
