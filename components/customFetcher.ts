export async function customFetcher(resource: string, init?: RequestInit) {
    let myInit: RequestInit;
    if (init) {
        myInit = init;
    } else {
        myInit = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default',
        } as RequestInit;
    }

    if (myInit.headers instanceof Headers) {
        myInit.headers.append('Authorization', 'Token token=y_NbAkKc66ryYTWUXYEu');
    }

    return await fetch(resource, myInit).then(res => res.json());
}