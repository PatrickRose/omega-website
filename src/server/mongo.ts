import {MongoClient} from 'mongodb';
import {MakeLeft, MakeRight} from "../utils/io-ts-helpers";
import {Either} from "fp-ts/Either";

export default function initialiseMongo(): Either<string, MongoClient> {
    const host = process.env.MONGO_HOST;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const database = process.env.MONGO_DATABASE;

    const missing = [
        ['MONGO_HOST', host],
        ['MONGO_USERNAME', username],
        ['MONGO_PASSWORD', password],
        ['MONGO_DATABASE', database],
    ].filter(([, value]) => value);

    if (missing.length) {
        return MakeLeft('Some environment variables were not set: ' + missing.map(([envVar]) => envVar).join(', '));
    }

    const connStr = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;

    return MakeRight(new MongoClient(connStr));
}
