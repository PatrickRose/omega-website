import {Either} from "fp-ts/Either";

export default class BaseMemoryRepository<T extends { id: string }> {
    private readonly values: T[];

    constructor(values: T[]) {
        this.values = values;
    }

    all(): Either<Error, T[]> {
        return {
            _tag: 'Right',
            right: this.values
        }
    }

    get(id: string): Either<Error, T> {
        for (let value of this.values) {
            if (value.id === id) {
                return {
                    _tag: 'Right',
                    right: value
                }
            }
        }

        return {
            _tag: 'Left',
            left: new Error(`Value with id ${id} not found`)
        }
    }
}
