import * as t from 'io-ts';
import {
    EventAPIDecode,
    EventDecode,
    GameAPIDecode,
    GameDecode,
    OnlineGameDecode,
    PlayByEmailGameDecode
} from "./io-ts-def";

export type OnlineGame = t.TypeOf<typeof OnlineGameDecode>
export type PlayByEmailGame = t.TypeOf<typeof PlayByEmailGameDecode>
export type Game = t.TypeOf<typeof GameDecode>
export type GameAPI = t.TypeOf<typeof GameAPIDecode>

export type OMEGAEvent = t.TypeOf<typeof EventDecode>
export type EventAPI = t.TypeOf<typeof EventAPIDecode>
