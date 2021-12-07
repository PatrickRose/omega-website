import { MongoClient } from 'mongodb';

export default function initialiseMongo(): MongoClient {
    const host = process.env.MONGO_HOST;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const database = process.env.MONGO_DATABASE;

    const connStr = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;

    return new MongoClient(connStr);
}
