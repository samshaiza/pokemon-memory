

export const createPokemon = async () => {
    let pokemans;

    async function fetchURL(url) {
        const res = await fetch(url);
        const json = await res.json();
        return await json;
    }

    let myPromise = new Promise(function(myResolve, myReject) {
        fetchURL('https://pokeapi.co/api/v2/pokemon?limit=1001')
        .then((res) => {
            myResolve(res.results);
        })
        .catch((e)=> {
            myReject(e);
        })
    });

    function getPokemon(url) {
        return fetchURL(url)
        .then((res) => {
            const tempObj = {id: (res.id), name: (res.name), imgSrc: (res.sprites.front_default)};
            
            return Promise.resolve(tempObj);
        })
    }
    
    await myPromise
        .then((value) => {
                return Promise.all(value.map(async (item)=>{
                    const res = await getPokemon(item.url);
                    return res;
                }))
                .then((results) => {
                    const pokeA = results;
                    pokemans = new Map(pokeA.map(i => [i.id, {name: i.name, imgSrc: i.imgSrc}]));
                    return pokemans;
                })
            }
        )
    console.log(pokemans);
    return { pokemans };
}