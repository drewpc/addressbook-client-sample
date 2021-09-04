export async function customFetcher(resource: string, init?: RequestInit) {
    console.log('resource: ', resource);
    console.log('init: ', init);

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
    myInit.headers.append('Authorization', 'Token token=y_NbAkKc66ryYTWUXYEu');

    return await fetch(resource, myInit).then(res => res.json());
}