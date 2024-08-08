
import card from "./card.js"


document.addEventListener("DOMContentLoaded" , () => {
    const pokedex = document.getElementById('pokedex');
    const search = document.getElementById('search');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let offset = 0;
    const limit = 10;

    const fetchPokemonWithLimitOffset = async () => {
            
            // const data = await fetchPokemon.json();
            try{
                pokedex.innerHTML = ''
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                if(!response.ok){
                    throw new Error(`Error: ${response.status}`)
                }
                const data = await response.json();
                const result = data.results; 
                for(let pokemon of result){
                    await fetchPokemonInfo(pokemon.url) 
                }
            }
            catch(error){
                console.log(error)
            }
        };



    const fetchPokemonInfo = async (url) => {
        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            }
            const data = await response.json();
            const createCard = card(data);
            pokedex.appendChild(createCard)
        }
        catch(error){
            console.log(error)
        }
        
    }


    prev.addEventListener("click", () =>{
        offset-= limit;
        fetchPokemonWithLimitOffset()
    })
    next.addEventListener('click' , () => {
        offset+=limit;
        fetchPokemonWithLimitOffset()
    })

    fetchPokemonWithLimitOffset()



});