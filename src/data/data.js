export const createPokemon = async () =>{
    const pokemonNeeded = ['bulbasaur', 'charmander', 'squirtle', 'chikorita', 'cyndaquil', 'totodile'];

    const pokemans = [];
    
    async function fetchPokemon(url) {
        const res = await fetch(url);
        const json = await res.json();
        return await json;
    }
    
    for (const pokeName in pokemonNeeded) {
        await fetchPokemon('https://pokeapi.co/api/v2/pokemon/' + pokemonNeeded[pokeName])
        .then((data) => {
            pokemans.push({id: pokeName, name: data.name, imgSrc: data.sprites.front_default});
        });
    }

    return { pokemans };
}