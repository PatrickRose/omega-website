import { Game, OmegaDate } from "../types/types";

export function getJSDateFromOmegaDate(date: OmegaDate): Date {
    const val = new Date();
    val.setUTCFullYear(date.year, date.month - 1, date.day ?? 1);

    return val;
}

export function getStringFromJSDate(date: Date): string {
    return date.toLocaleDateString();
}

export function getStringFromOmegaDate(date: OmegaDate): string {
    const jsDate = getJSDateFromOmegaDate(date);

    if (date.day === null) {
        return new Intl.DateTimeFormat([], {
            month: "long",
            year: "numeric"
        }).format(jsDate);
    }

    return getStringFromJSDate(jsDate);
}

export function dateSorter(a: Game, b: Game): number {
    const aDate = a.date;
    const bDate = b.date;

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const aDateAsJS = getJSDateFromOmegaDate(aDate);
    const bDateAsJS = getJSDateFromOmegaDate(bDate);

    let reverseOrder = true;

    if (aDateAsJS < currentDate && bDateAsJS < currentDate) {
        reverseOrder = false;
    } else if (aDateAsJS < currentDate) {
        return 1;
    } else if (bDateAsJS < currentDate) {
        return -1;
    }

    let keys: (keyof typeof aDate)[] = ["year", "month", "day"];

    for (let key of keys) {
        const aDateKeyVal = aDate[key];
        const bDateKeyVal = bDate[key];
        if (aDateKeyVal === null) {
            if (bDateKeyVal !== null) {
                return reverseOrder ? -1 : 1;
            }

            continue;
        }

        if (bDateKeyVal === null) {
            return reverseOrder ? 1 : -1;
        }

        if (aDateKeyVal !== bDateKeyVal) {
            let diff = bDateKeyVal - aDateKeyVal;

            return reverseOrder ? -diff : diff;
        }
    }

    return 0;
}
