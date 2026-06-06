const pokemonName = document.getElementById("pokemon_name");
const pokemonImage = document.getElementById("pokemon_image");
const pokemonType = document.getElementById("pokemon_types");
const pokemonTitle = document.getElementById("pokemon_title");
const pokemonId = document.getElementById("pokemon_id");
const pokemonHeight = document.getElementById("pokemon_height");
const pokemonWeight = document.getElementById("pokemon_weight");
const pokemonAbilities = document.getElementById("pokemon_abilities");
const pokemonStats = document.getElementById("pokemon_stats");

const button = document.getElementById("search_button");

const resultSection = document.getElementById("result_section");
const searchSection = document.getElementById("search_section");

button.addEventListener("click", async () => {
    const name = pokemonName.value.toLowerCase().trim();
    if (name === "") {
        alert("Please enter a Pokemon name.");
        return;
    }
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!respuesta.ok){
            throw new Error("Network response was not ok");
        }
        const datos = await respuesta.json();
        console.log(datos);
        pokemonImage.src = datos.sprites.front_shiny || datos.sprites.front_default;
        pokemonId.textContent = "ID: " + datos.id;
        pokemonTitle.textContent = "Name: " + datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
        pokemonType.textContent = "Type: " + datos.types.map(typeInfo => typeInfo.type.name).join(", ");
        pokemonHeight.textContent = "Height: " + datos.height;
        pokemonWeight.textContent = "Weight: " + datos.weight;
        pokemonAbilities.textContent = "Abilities: " + datos.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");
        pokemonStats.textContent = "Stats: " + datos.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(", ");
    }
    catch(error){
        console.error(error);
    }
});
