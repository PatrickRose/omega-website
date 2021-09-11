const rootPath = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3000/api/'

export function apiCall(path: string): {controller: AbortController, response: Promise<Response>} {
    const controller = new AbortController();

    return {
        controller,
        response: fetch(
            rootPath + path,
            {signal: controller.signal}
        )
    };
}
