export async function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const res = await fetch(url, requestOptions)
    return await res.json()
}

export async function post(url: string, body: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
    };
    const res = await fetch(url, requestOptions)
    return await res.json()
}