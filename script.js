let pokeList = document.querySelector('#pokemon-list');

// Fonction pour fetcher les données des pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            createPokemon(data);
        });
}
// Fonction pour itérer les pokemon souhaité
function fetchPokemons(number) {
    for (let i =1; i <= number; i++) {
        fetchPokemon(i);
    }
}
// Fonction pour renvoyer les données à l'utilisateur
function createPokemon(pokemon) {
    let card = document.createElement('div');
    card.classList.add('pokemon-item');

    let number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    let spritesContainer = document.createElement('div');
    spritesContainer.classList.add('img-container');

    let sprites = document.createElement('img');
    sprites.src = pokemon.sprites.front_default;

    spritesContainer.appendChild(sprites);
    
    let name = document.createElement('p');
    name.textContent = pokemon.name;

    card.appendChild(number);
    card.appendChild(spritesContainer);
    card.appendChild(name);

    pokeList.appendChild(card);
}
// Fonction pour afficher une fenêtre modale lorsque l'on clic sur la card
function createDetails(pokemon) {

}
// Événements pour les fenêtres modales

// Nombre de pokemon à afficher à l'utilisateur
fetchPokemons(151);
