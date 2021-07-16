import {MemoryRepository} from "./memory";
import {isRight} from "fp-ts/Either";
import {Game} from "../../../types/types";

const cases: [string, Game[]][] = [
    [
        'Empty repo', []
    ],
]

describe("Memory games repository - all games", () => {
    test.each(cases)(
        "%p",
        (name, expected) => {
            const repo = new MemoryRepository(expected);

            const result = repo.all();

            if (!isRight(result)) {
                throw Error('Should have received a "right"');
            }

            expect(result.right).toEqual(expected);
        }
    )
})
