import { Either } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import * as types from "./io-ts-def";

export type ApiResult<T extends Either> = {
    status: number,
    body: T
};

export type OmegaDate = t.TypeOf<typeof types.DateDecode>;

export type OnlineGame = t.TypeOf<typeof types.OnlineGameDecode>;
export type PlayByEmailGame = t.TypeOf<typeof types.PlayByEmailGameDecode>;
export type Game = t.TypeOf<typeof types.GameDecode>;
export type GameAPI = t.TypeOf<typeof types.GameAPIDecode>;
export type UpcomingEventsAPI = t.TypeOf<typeof types.UpcomingEventsAPIDecode>;

export type LoginFormValues = t.TypeOf<typeof types.LoginFormValuesDecode>;
export type User = t.TypeOf<typeof types.UserDecode>;
export type DBUser = t.TypeOf<typeof types.DBUserDecode>;
export type LoginFailed = t.TypeOf<typeof types.LoginFailedDecode>;

export type CreateUserFormValues = t.TypeOf<typeof types.CreateUserFormValuesDecode>;
export type CreateUserSuccess = t.TypeOf<typeof types.CreateUserSuccessDecode>
export type CreateUserFailed = t.TypeOf<typeof types.CreateUserFailedDecode>
export type CreateUserResult = t.TypeOf<typeof types.CreateUserResultDecode>

export type ChangePasswordFormValues = t.TypeOf<typeof types.ChangePasswordFormValuesDecode>;
export type ChangePasswordSuccess = t.TypeOf<typeof types.ChangePasswordSuccessDecode>
export type ChangePasswordFailed = t.TypeOf<typeof types.ChangePasswordFailedDecode>
export type ChangePasswordResult = t.TypeOf<typeof types.ChangePasswordResultDecode>

export type CreateGameFormValues = t.TypeOf<typeof types.CreateGameFormValuesDecode>;
export type CreateGameSuccess = t.TypeOf<typeof types.CreateGameSuccessDecode>
export type CreateGameFailed = t.TypeOf<typeof types.CreateGameFailedDecode>
export type CreateGameResult = t.TypeOf<typeof types.CreateGameResultDecode>

export type EditGameFormValues = t.TypeOf<typeof types.EditGameFormValuesDecode>;
export type EditGameSuccess = t.TypeOf<typeof types.EditGameSuccessDecode>
export type EditGameFailed = t.TypeOf<typeof types.EditGameFailedDecode>
export type EditGameResult = t.TypeOf<typeof types.EditGameResultDecode>

export type PodcastEpisode = t.TypeOf<typeof types.PodcastEpisodeDecode>;

