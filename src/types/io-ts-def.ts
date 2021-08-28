import * as t from 'io-ts';

const DayDecode = t.union([
    t.literal(1),
    t.literal(2),
    t.literal(3),
    t.literal(4),
    t.literal(5),
    t.literal(6),
    t.literal(7),
    t.literal(8),
    t.literal(9),
    t.literal(10),
    t.literal(11),
    t.literal(12),
    t.literal(13),
    t.literal(14),
    t.literal(15),
    t.literal(16),
    t.literal(17),
    t.literal(18),
    t.literal(19),
    t.literal(20),
    t.literal(21),
    t.literal(22),
    t.literal(23),
    t.literal(24),
    t.literal(25),
    t.literal(26),
    t.literal(27),
    t.literal(28),
    t.literal(29),
    t.literal(30),
    t.literal(31),
]);

const MonthDecode = t.union([
    t.literal(1),
    t.literal(2),
    t.literal(3),
    t.literal(4),
    t.literal(5),
    t.literal(6),
    t.literal(7),
    t.literal(8),
    t.literal(9),
    t.literal(10),
    t.literal(11),
    t.literal(12),
]);


const DateDecode = t.type({
    year: t.number,
    month: MonthDecode,
    day: DayDecode
});

export const OnlineGameDecode = t.type({
    id: t.string,
    name: t.string,
    date: DateDecode,
    designer: t.string,
    preamble: t.string,
    fullDescription: t.string,
    type: t.union([t.literal('Online game'), t.literal('Play-By-Email')]),
});

export const PlayByEmailGameDecode = t.type({
    id: t.string,
    name: t.string,
    date: DateDecode,
    endDate: DateDecode,
    designer: t.string,
    preamble: t.string,
    fullDescription: t.string,
    type: t.union([t.literal('Online game'), t.literal('Play-By-Email')]),
});

export const GameDecode = t.union([PlayByEmailGameDecode, OnlineGameDecode]);

export const GameAPIDecode = t.type({
    games: t.array(GameDecode)
});

export const UpcomingEventsAPIDecode = t.type({
    events: t.array(GameDecode)
})
