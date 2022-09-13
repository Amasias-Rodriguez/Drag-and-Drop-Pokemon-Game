const CARDS = 10;

fetch('https://pokeapi.co/api/v2/ability/1/')
.then(res => res.json())const CARDS = 3;

for(let i=1; i<= CARDS; i++){
    let id = getRandomId(150)
    searchPokemonById(id)
}

function getRandomId(max){
    return Math.floor(Math.random()*max)+1
}

let draggableElements = document.querySelector('.draggable-elements')

let pokemonSearched = [];
async function searchPokemonById(id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await res.json()
    pokemonSearched.push(data)

    draggableElements.innerHTML = ''
    pokemonSearched.forEach(pokemon =>{
        console.log(pokemon.sprites.back_default)
       draggableElements.innerHTML +=
        `<div class="pokemon">
        <img class="image" 
        src="${pokemon.sprites.other['official-artwork'].front_default}" alt="pokemon">
        </div>`
    } )
}


.then(data => console.log(data))
