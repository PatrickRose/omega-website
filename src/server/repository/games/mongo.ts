import GamesRepository from "./index";

import { MongoClient } from 'mongodb';

import {isRight, Either, isLeft} from "fp-ts/Either";
import { Game } from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { dateSorter} from "../../../utils";
import initialiseMongo from '../../mongo';
import {gameUtils} from "../../../utils/games";

export class MongoRepository implements GamesRepository {

    constructor(private readonly mongo: MongoClient) { }

    static APIInstance(): Either<string, MongoRepository> {
        const client = initialiseMongo();

        if (isLeft(client)) {
            return client;
        }

        return MakeRight(new MongoRepository(client.right));
    }

    async upcomingEvents(limit: number): Promise<Either<false, Game[]>> {
        const all = await this.all();

        if (!isRight(all)) {
            return all;
        }
        const games = all.right.filter((game) => gameUtils.isUpcoming(game))
        games.sort((a, b) => -dateSorter(a, b));

        return MakeRight(games.slice(0, limit));
    }

    async all(): Promise<Either<false, Game[]>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const gamesCollection = database.collection<Game>("games");

            const cursor = gamesCollection.find<Game>({});

            return MakeRight(await cursor.toArray());
        }
        catch (e) {
            console.log(e);
            return MakeLeft(false);
        }
        finally {
            await this.mongo.close();
        }
    }

    async get(id: string): Promise<Either<false, Game>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const gamesCollection = database.collection<Game>("games");

            const cursor = gamesCollection.find<Game>({ _id: id });

            const game = await cursor.next();

            if (game === null) {
                return MakeLeft(false);
            }

            return MakeRight(game);
        }
        catch (e) {
            console.log(e);
            return MakeLeft(false);
        }
        finally {
            await this.mongo.close();
        }
    }

    private readonly _collectionName = "games";

    async insert(game: Game): Promise<Either<string, true>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const gamesCollection = database.collection<Game>(this._collectionName);

            await gamesCollection.insertOne(game);

            return MakeRight(true);
        }
        catch (e) {
            return MakeLeft((e as Error).message);
        }
        finally {
            await this.mongo.close();
        }
    }

    async update(id: string, game: Game): Promise<Either<string, true>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const userCollection = database.collection<Game>("games");

            const result = await userCollection.updateOne({ _id: id }, { "$set": game });

            if (result.matchedCount == 1) {
                return MakeRight(true);
            }

            console.log(result);

            return MakeLeft(`Failed to update - matched ${result.matchedCount} when updating ${id}`);
        }
        catch (e) {
            return MakeLeft((e as Error).message)
        }
        finally {
            await this.mongo.close();
        }
    }
}
