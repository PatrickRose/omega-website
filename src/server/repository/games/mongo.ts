import GamesRepository from "./index";

import { MongoClient } from 'mongodb';

import { isRight, Either } from "fp-ts/Either";
import { Game } from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { dateSorter, getJSDateFromGameDate } from "../../../utils";
import initialiseMongo from '../../mongo';

export class MongoRepository implements GamesRepository {

    constructor(private readonly mongo: MongoClient) { }

    static APIInstance(): MongoRepository {
        const client = initialiseMongo();

        return new MongoRepository(client);
    }

    async upcomingEvents(limit: number): Promise<Either<false, Game[]>> {
        const all = await this.all();

        if (!isRight(all)) {
            return all;
        }
        const currDate = new Date();
        currDate.setHours(0, 0, 0, 0);

        const games = all.right.filter(
            (game: Game): boolean => {
                return getJSDateFromGameDate(game.date) >= currDate
            }
        )
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

    async insert(game: Game): Promise<Either<false, true>> {
        try {
            await this.mongo.connect();

            const database = this.mongo.db();

            const gamesCollection = database.collection<Game>("games");

            await gamesCollection.insertOne(game);

            return MakeRight(true);
        }
        catch (e) {
            console.log(e);
            return MakeLeft(false);
        }
        finally {
            await this.mongo.close();
        }
    }
}
