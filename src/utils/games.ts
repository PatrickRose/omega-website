import { Game, OnlineGame, PlayByEmailGame } from "../types/types";
import { OnlineGameDecode } from "../types/io-ts-def";
import { getJSDateFromOmegaDate } from "./index";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type GameUtils<T extends Game> = {
    isUpcoming(value: T): boolean;
};

const onlineGameUtils: GameUtils<OnlineGame> = {
    isUpcoming(value: OnlineGame): boolean {
        const dateFromThis = getJSDateFromOmegaDate(value.date);

        const today = new Date();

        dateFromThis.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        return dateFromThis >= today;
    }
};

const pbemGameUtils: GameUtils<PlayByEmailGame> = {
    isUpcoming(value: PlayByEmailGame): boolean {
        const dateFromThis = getJSDateFromOmegaDate(value.endDate);

        const today = new Date();

        dateFromThis.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        return dateFromThis >= today;
    }
};

export const gameUtils: GameUtils<Game> & {
    getUtils(game: Game): GameUtils<Game>;
} = {
    getUtils(game: Game): GameUtils<Game> {
        if (OnlineGameDecode.is(game)) {
            return onlineGameUtils;
        }

        return pbemGameUtils;
    },

    isUpcoming(value: Game): boolean {
        return this.getUtils(value).isUpcoming(value);
    }
};
export const GAME_ICONS: { [key in Game["type"]]: IconDefinition } = {
    "Play-By-Email": faEnvelopeOpenText,
    "Online game": faDesktop
};
