import {dateSorter} from "./index";
import {OnlineGame} from "../types/types";

describe('dateSorter', () => {
    const currentDate = new Date();

    const gameFuture1: OnlineGame = {
        _id: 'FUTURE1',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: 1,
            month: 1,
            year: currentDate.getFullYear() + 1
        },
        type: "Online game"
    }
    const gameFuture2: OnlineGame = {
        _id: 'FUTURE2',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: 1,
            month: 1,
            year: currentDate.getFullYear() + 2
        },
        type: "Online game"
    }
    const gameFutureNoDay: OnlineGame = {
        _id: 'FUTURENODAY',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: null,
            month: 1,
            year: currentDate.getFullYear() + 1
        },
        type: "Online game"
    }

    const gamePast1: OnlineGame = {
        _id: 'PAST1',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: 1,
            month: 1,
            year: currentDate.getFullYear() - 1
        },
        type: "Online game"
    }
    const gamePast2: OnlineGame = {
        _id: 'PAST2',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: 1,
            month: 1,
            year: currentDate.getFullYear() - 2
        },
        type: "Online game"
    }
    const gamePastNoDay: OnlineGame = {
        _id: 'PASTNODAY',
        fullDescription: '',
        designer: '',
        name: '',
        preamble: '',
        date: {
            day: null,
            month: 1,
            year: currentDate.getFullYear() - 1
        },
        type: "Online game"
    }

    const cases: [string, OnlineGame[], OnlineGame[]][] = [
        [
            'All future',
            [
                gameFuture1,
                gameFuture2
            ],
            [
                gameFuture1,
                gameFuture2
            ]
        ],
        [
            'All future (wrong order)',
            [
                gameFuture2,
                gameFuture1,
            ],
            [
                gameFuture1,
                gameFuture2
            ]
        ],
        [
            'All future (wrong order with no date)',
            [
                gameFutureNoDay,
                gameFuture2,
                gameFuture1,
            ],
            [
                gameFutureNoDay,
                gameFuture1,
                gameFuture2,
            ]
        ],
        [
            'All past',
            [
                gamePast1,
                gamePast2
            ],
            [
                gamePast1,
                gamePast2
            ]
        ],
        [
            'All past (wrong order)',
            [
                gamePast2,
                gamePast1,
            ],
            [
                gamePast1,
                gamePast2
            ]
        ],
        [
            'All past (wrong order with no date)',
            [
                gamePastNoDay,
                gamePast2,
                gamePast1,
            ],
            [
                gamePast1,
                gamePastNoDay,
                gamePast2,
            ]
        ],
        [
            'All games',
            [
                gamePast1,
                gamePastNoDay,
                gameFuture2,
                gamePast2,
                gameFutureNoDay,
                gameFuture1,
            ],
            [
                gameFutureNoDay,
                gameFuture1,
                gameFuture2,
                gamePast1,
                gamePastNoDay,
                gamePast2,
            ]
        ]
    ]

    test.each(cases)(
        'Sorting %p',
        async (name, games, expectedResult) => {
            games.sort(dateSorter);

            expect(games).toEqual(expectedResult);
        }
    )

})
