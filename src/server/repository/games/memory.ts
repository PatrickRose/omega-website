import GamesRepository from "./index";

import { Either } from "fp-ts/Either";
import { Game } from "../../../types/types";
import { MakeLeft, MakeRight } from "../../../utils/io-ts-helpers";
import { dateSorter } from "../../../utils";
import { allGames } from "./gamelist";
import { gameUtils } from "../../../utils/games";

export class MemoryRepository implements GamesRepository {
    private games: Game[];

    static APIInstance(): MemoryRepository {
        return new MemoryRepository(allGames);
    }

    constructor(games: Game[]) {
        this.games = games;
    }

    async upcomingEvents(limit: number): Promise<Either<false, Game[]>> {
        const games: Game[] = this.games.filter((game) =>
            gameUtils.isUpcoming(game)
        );

        games.sort(dateSorter);

        return MakeRight(games.slice(0, limit));
    }

    async all(): Promise<Either<false, Game[]>> {
        return {
            _tag: "Right",
            right: this.games
        };
    }

    async get(id: string): Promise<Either<false, Game>> {
        for (let game of this.games) {
            if (game._id === id) {
                return MakeRight(game);
            }
        }

        console.log(`Game with id ${id} not found`);

        return MakeLeft(false);
    }

    async insert(game: Game): Promise<Either<string, true>> {
        this.games.push(game);

        return MakeRight(true);
    }

    async update(id: string, game: Game): Promise<Either<string, true>> {
        for (let gameKey in this.games) {
            const existingGame = this.games[gameKey];
            if (existingGame._id === id) {
                this.games[gameKey] = game;

                return MakeRight(true);
            }
        }

        return MakeLeft("Did not find game");
    }
}
