import {Game} from "../types/types";

export function getJSDateFromGameDate(date: Game["date"]): Date {
    const val = new Date();
    val.setUTCFullYear(date.year, date.month - 1, date.day);

    return val;
}

export function getStringFromJSDate(date: Date): string {
    return date.toLocaleDateString();
}

export function getStringFromGameDate(date: Game["date"]): string {
    return getStringFromJSDate(getJSDateFromGameDate(date));
}
