import {Left, Right} from 'fp-ts/Either'

export function MakeLeft<T>(value: T): Left<T> {
    return {
        _tag: 'Left',
        left: value
    }
}
export function MakeRight<T>(value: T): Right<T> {
    return {
        _tag: 'Right',
        right: value
    }
}
