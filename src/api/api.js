export async function getPokedex() {
    const response = await fetch('../data/pokedex.json')
    .then(response => response)
    .then((data) => data).catch(err => console.log(err));
    console.log(response)
    return response;
}

export async function getType() {
    const response = await fetch('../data/types.json')
    .then(response => response.json())
    .then((data) => data).catch(err => console.log(err));
    return response;
}