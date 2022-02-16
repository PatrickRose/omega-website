import {OnlineGame, PlayByEmailGame} from "../types/types";
import {gameUtils} from "./games";

describe('Game utils', () => {
    describe('Online Game', () => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = 1 + currentDate.getMonth() as OnlineGame["date"]["month"];
        const day = currentDate.getDate() as OnlineGame["date"]["day"];

        const partialGame = {
            _id: 'ONLINE',
            type: 'Online game' as OnlineGame["type"],
            designer: 'Foo',
            fullDescription: 'Test',
            name: 'Test',
            preamble: 'Test'
        }

        const isUpcomingCases: [string, OnlineGame, boolean][] = [
            [
                'Game is last year',
                {
                    date: {month, day, year: 2000}, ...partialGame
                },
                false
            ],
            [
                'Game is next year',
                {
                    date: {month, day, year: year + 10}, ...partialGame
                },
                true
            ],
            [
                'Game is today',
                {
                    date: {month, day, year}, ...partialGame
                },
                true
            ],
        ]

        test.each(isUpcomingCases)(
            "%p",
            async (name, game, expectedResult) => {
                expect(gameUtils.isUpcoming(game)).toEqual(expectedResult);
            }
        )
    })
    describe('PBEM game', () => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = 1 + currentDate.getMonth() as OnlineGame["date"]["month"];
        const day = currentDate.getDate() as OnlineGame["date"]["day"];

        const partialGame = {
            _id: 'ONLINE',
            type: 'Play-By-Email' as PlayByEmailGame["type"],
            designer: 'Foo',
            fullDescription: 'Test',
            name: 'Test',
            preamble: 'Test'
        }

        const isUpcomingCases: [string, PlayByEmailGame, boolean][] = [
            [
                'Game is last year',
                {
                    date: {month, day, year: 2000},
                    endDate: {month, day, year: 2000},
                    ...partialGame
                },
                false
            ],
            [
                'Game is next year',
                {
                    date: {month, day, year: year + 10},
                    endDate: {month, day, year: year + 15},
                    ...partialGame
                },
                true
            ],
            [
                'Game is today',
                {
                    date: {month, day, year},
                    endDate: {month, day, year: year},
                    ...partialGame
                },
                true
            ],
            [
                'Game is last year but finishes next year',
                {
                    date: {month, day, year: 2000},
                    endDate: {month, day, year: year + 1},
                    ...partialGame
                },
                true
            ],
        ];

        test.each(isUpcomingCases)(
            "%p",
            async (name, game, expectedResult) => {
                expect(gameUtils.isUpcoming(game)).toEqual(expectedResult);
            }
        )
    })
});
