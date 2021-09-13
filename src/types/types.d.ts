import * as t from 'io-ts';
import { GameAPIDecode, GameDecode, OnlineGameDecode, PlayByEmailGameDecode, UpcomingEventsAPIDecode } from "./io-ts-def";

export type OnlineGame = t.TypeOf<typeof OnlineGameDecode>;
export type PlayByEmailGame = t.TypeOf<typeof PlayByEmailGameDecode>;
export type Game = t.TypeOf<typeof GameDecode>;
export type GameAPI = t.TypeOf<typeof GameAPIDecode>;
export type UpcomingEventsAPI = t.TypeOf<typeof UpcomingEventsAPIDecode>;
