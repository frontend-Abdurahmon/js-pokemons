let elPokemons = $_(".pokemons");

pokemons.forEach((pokemon) => {
    let newPokemonList = createElement("li", "pokemon-item ");
    let newPokemonImg = createElement("img", "pokemon-img");
    let newPokemonName = createElement("h2", "text-center", pokemon.name);
    let newPokemonType = createElement("p", "text-center", pokemon.type.join(", "));

    newPokemonImg.src = pokemon.img;
    newPokemonImg.alt = pokemon.name;

    newPokemonList.appendChild(newPokemonImg);
    newPokemonList.appendChild(newPokemonName);
    newPokemonList.appendChild(newPokemonType);

    elPokemons.appendChild(newPokemonList);
});