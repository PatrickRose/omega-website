import { path } from "static-path";

export const home = path('/');

export const gameList = path("/games");
export const singleGame = gameList.path('/:game');
export const pastGames = gameList.path("#past");

export const aboutMegagames = path("/about-megagames");

export const planning = path("/planning");

export const contact = path("/contact");

export const codeOfConduct = path("/code-of-conduct");
