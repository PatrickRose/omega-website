import {NextApiResponse} from "next";

const CACHE_CLEAR = [
    '/',
    '/games',
    '/games/[id]'
];

export async function clearGameCaches(res: NextApiResponse, id: string): Promise<void> {
    for (const cacheClear in CACHE_CLEAR) {
        await res.unstable_revalidate(cacheClear.replace('[id]', id))
            .catch(fail => console.log(fail));
    }
}
