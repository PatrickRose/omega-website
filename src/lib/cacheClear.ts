import { NextApiResponse } from "next";

const CACHE_CLEAR = ["/", "/games", "/games/[id]"];

export async function clearGameCaches(
    res: NextApiResponse,
    id: string
): Promise<void> {
    for (const cacheClear of CACHE_CLEAR) {
        await res
            .revalidate(cacheClear.replace("[id]", id))
            .catch((fail) => console.log(fail));
    }
}
