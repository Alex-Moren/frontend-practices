const pokemonName = document.getElementById("pokemon_name");
const pokemonImage = document.getElementById("pokemon_image");
const pokemonType = document.getElementById("pokemon_types");
const pokemonTitle = document.getElementById("pokemon_title");
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
        pokemonImage.src = datos.sprites.front_default;
        pokemonTitle.textContent = "Name: " + datos.name.charAt(0).toUpperCase() + datos.name.slice(1);
        pokemonType.textContent = "Type: " + datos.types.map(typeInfo => typeInfo.type.name).join(", ");
    }
    catch(error){
        console.error(error);
    }
});