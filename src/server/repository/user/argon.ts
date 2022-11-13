import * as argon2 from "argon2";

const ARGON_CONSTANTS: argon2.Options & { raw?: false } = {
    type: argon2.argon2id,
    timeCost: 5
};

export async function hashPassword(password: string): Promise<string> {
    return argon2.hash(password, ARGON_CONSTANTS);
}
