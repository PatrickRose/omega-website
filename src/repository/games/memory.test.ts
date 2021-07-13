import {Game} from "../../../client/src/types/types";
import {MemoryRepository} from "./memory";
import {isRight} from "fp-ts/Either";

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
                fail('Should have received a "right"');
            }

            expect(result.right).toEqual(expected);
        }
    )
})
