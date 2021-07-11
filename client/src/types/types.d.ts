import * as t from 'io-ts';
import {GameAPIDecode, GameDecode} from "./io-ts-def";

export type Game = t.TypeOf<typeof GameDecode>
export type GameAPI = t.TypeOf<typeof GameAPIDecode>
