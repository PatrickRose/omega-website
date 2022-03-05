import {Game, OmegaDate} from "../types/types";

export function getJSDateFromOmegaDate(date: OmegaDate): Date {
    const val = new Date();
    val.setUTCFullYear(date.year, date.month - 1, date.day);

    return val;
}

export function getStringFromJSDate(date: Date): string {
    return date.toLocaleDateString();
}

export function getStringFromOmegaDate(date: OmegaDate): string {
    return getStringFromJSDate(getJSDateFromOmegaDate(date));
}

export function dateSorter(a: Game, b: Game): number {
    const aDate = a.date;
    const bDate = b.date;

    let keys: (keyof typeof aDate)[] = ['year', 'month', 'day'];

    for (let key of keys) {
        if (aDate[key] !== bDate[key]) {
            return bDate[key] - aDate[key]
        }
    }

    return 0;
}
