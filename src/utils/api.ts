const rootPath = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3000/api/'

export function apiCall(path: string): Promise<Response> {
    return fetch(
        rootPath + path
    );
}
