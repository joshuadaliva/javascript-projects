import card from "./card.js"

document.addEventListener("DOMContentLoaded", () => {
    const pokedex = document.getElementById('pokedex');
    const search = document.getElementById('search');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const form = document.getElementById('submit');

    let offset = 0;
    const limit = 20;
    let allPokemons = [];

    const fetchAllPokemons = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000'); // Fetch all Pokémon data
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            allPokemons.push(...data.results)
        } catch (error) {
            console.log(error);
        }
    };




    const fetchPokemonWithLimitOffset = async () => {
        try {
            pokedex.innerHTML = '';
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const result = data.results;
            for (let pokemon of result) {
                await fetchPokemonInfo(pokemon.url);
            }
        } catch (error) {
            console.log(error);
        }
    };




    const fetchPokemonInfo = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const createCard = card(data);
            pokedex.appendChild(createCard);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async () => {
        const searchValue = search.value.toLowerCase();
        if(searchValue === ''){
            fetchPokemonWithLimitOffset()
            return
        }
        pokedex.innerHTML = '';
        const filteredPokemons = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue));
        for (let pokemon of filteredPokemons) {
            await fetchPokemonInfo(pokemon.url);
        }
    };




    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSearch();
    });

    prev.addEventListener("click", () => {
        if (offset <= 0) {
            prev.style.backgroundColor = '#DFD3C3';
            return;
        }
        offset -= limit;
        fetchPokemonWithLimitOffset();
    });

    next.addEventListener('click', () => {
        prev.style.backgroundColor = 'white';
        offset += limit;
        fetchPokemonWithLimitOffset();
    });

    // Initialize by fetching all Pokémon data and the initial set of Pokémon
    fetchAllPokemons().then(() => {
        fetchPokemonWithLimitOffset();
    });
});
