/**
 * On fetch une url sans que le navigateur mette en cache les fichiers
 */
export async function fetchData(url: string): Promise<Response> {
    //On essaye de récupérer la réponse
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
        },
    });
    if (!response.ok) throw new Error(response.statusText);

    //On retourne la réponse
    return response;
}

/**
 * On fetch une url sans que le navigateur mette en cache les fichiers (text)
 */
export async function fetchDataText(url: string): Promise<String> {
    //On essaye de récupérer la réponse
    const response: Response = await fetchData(url);

    //On retourne le texte
    return await (response.text() as Promise<String>);
}

/**
 * On fetch une url sans que le navigateur mette en cache les fichiers (json)
 */
export async function fetchDataJson<T>(url: string): Promise<T> {
    //On essaye de récupérer la réponse
    const response: Response = await fetchData(url);

    //On retourne le json
    return await (response.json() as Promise<T>);
}