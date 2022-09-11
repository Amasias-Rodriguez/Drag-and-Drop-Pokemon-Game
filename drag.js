const CARDS = 10;

fetch('https://pokeapi.co/api/v2/ability/1/')
.then(res => res.json())
.then(data => console.log(data))
