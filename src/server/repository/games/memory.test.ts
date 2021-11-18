import { MemoryRepository } from "./memory";
import { isRight } from "fp-ts/Either";
import { Game } from "../../../types/types";

const cases: [string, Game[]][] = [
    [
        'Empty repo', []
    ],
]

describe("Memory games repository - all games", () => {
    test.each(cases)(
        "%p",
        async (name, expected) => {
            const repo = new MemoryRepository(expected);

            const result = await repo.all();

            if (!isRight(result)) {
                throw Error('Should have received a "right"');
            }

            expect(result.right).toEqual(expected);
        }
    )
});

const currDate = new Date();

const pastGame: Game = {
    date: {
        year: currDate.getFullYear() - 1,
        month: 1,
        day: 1
    },
    designer: 'TEST',
    fullDescription: 'TEST',
    _id: 'PAST_GAME',
    name: 'PAST GAME',
    preamble: 'TEST',
    type: 'Online game'
}
const gameNextYear: Game = {
    date: {
        year: currDate.getFullYear() + 1,
        month: 1,
        day: 1
    },
    designer: 'TEST',
    fullDescription: 'TEST',
    _id: 'NEXT YEAR',
    name: 'NEXT YEAR',
    preamble: 'TEST',
    type: 'Online game'
}
const gameTwoYear: Game = {
    date: {
        year: currDate.getFullYear() + 2,
        month: 1,
        day: 1
    },
    designer: 'TEST',
    fullDescription: 'TEST',
    _id: 'TWO YEAR',
    name: 'TWO YEAR',
    preamble: 'TEST',
    type: 'Online game'
}
const gameThreeYear: Game = {
    date: {
        year: currDate.getFullYear() + 3,
        month: 1,
        day: 1
    },
    designer: 'TEST',
    fullDescription: 'TEST',
    _id: 'THREE YEAR',
    name: 'THREE YEAR',
    preamble: 'TEST',
    type: 'Online game'
}
const gameFourYear: Game = {
    date: {
        year: currDate.getFullYear() + 4,
        month: 1,
        day: 1
    },
    designer: 'TEST',
    fullDescription: 'TEST',
    _id: 'FOUR YEAR',
    name: 'FOUR YEAR',
    preamble: 'TEST',
    type: 'Online game'
}

const upcoming: [string, number, Game[], Game[]][] = [
    ['Returns nothing if no games', 3, [], []],
    ['Game in the past not returned', 3, [pastGame], []],
    ['Returns all future games', 3, [gameNextYear, gameTwoYear, gameThreeYear], [gameNextYear, gameTwoYear, gameThreeYear]],
    ['Limits to number', 3, [gameNextYear, gameTwoYear, gameThreeYear, gameFourYear], [gameNextYear, gameTwoYear, gameThreeYear]],
    ['Doesn\'t count games in past', 3, [pastGame, gameNextYear, gameTwoYear, gameThreeYear, gameFourYear], [gameNextYear, gameTwoYear, gameThreeYear]],
    ['Games returned in order', 3, [gameNextYear, gameThreeYear, gameTwoYear], [gameNextYear, gameTwoYear, gameThreeYear]],
]

describe('Returns upcoming games', () => {
    test.each(upcoming)(
        "%p",
        async (name: string, limit: number, input: Game[], expected: Game[]) => {
            const repo = new MemoryRepository(input);

            const result = await repo.upcomingEvents(limit);

            if (!isRight(result)) {
                throw Error('Should have received a "right"');
            }

            expect(result.right).toEqual(expected);
        }
    )
});
