const createCard = (pokemon) => {
	const pokemonCard = document.createElement('div');
	pokemonCard.classList.add('card');
	const showPokemonInfo = `
	<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
	<h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
	<p>id: ${pokemon.id.toString().padStart(3, '0')}</p>`;
	pokemonCard.innerHTML = showPokemonInfo;
	return pokemonCard
};


export default createCard;