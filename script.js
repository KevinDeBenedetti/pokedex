let pokeList = document.querySelector('#pokemon-list');

// Fonction pour itérer les pokemon souhaité
function fetchPokemons(number) {
    for (let i =1; i <= number; i++) {
        fetchPokemon(i);
    }
}
// Fonction pour fetcher les données des pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {createPokemon(data)});
}
// Fonction pour renvoyer les données à l'utilisateur
function createPokemon(pokemon) {
    let card = document.createElement('div');
    card.classList.add('pokemon-item');
    card.setAttribute("data-id", `${pokemon.id}`)

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

// Modale
let modalHeader = document.querySelector(".modal-header")

window.onload = () => {
    // On récupère tous les boutons d'ouverture de modale
    const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
    for(let button of modalButtons){
        button.addEventListener("click", function(e){
            // On empêche la navigation
            e.preventDefault();
            // On récupère le data-target
            let target = this.dataset.target
            // On récupère la bonne modale
            let modal = document.querySelector(target);
            // On affiche la modale
            modal.classList.add("show");
            // On récupère les boutons de fermeture
            const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
            
            for(let close of modalClose){
                close.addEventListener("click", () => {
                    modal.classList.remove("show");
                });
            }            
            // On gère la fermeture lors du clic sur la zone grise
            modal.addEventListener("click", function(){
                this.classList.remove("show");
            });
            // On évite la propagation du clic d'un enfant à son parent
            modal.children[0].addEventListener("click", function(e){
                e.stopPropagation();
            })
        });
    }
}
// Nombre de pokemon à afficher à l'utilisateur
fetchPokemons(151);

// Test supp renvoie des datas dans la modale
let openBtn = document.querySelectorAll(`[data-target="#modal"]`)
console.log(openBtn)

openBtn.addEventListener("click", function(e){
    e.preventDefault();
    let modalId = document.querySelector(".pokemon-item");
    console.log(modalId.datatset.id)
})
fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(data => console.log(data))

// TEST pour le retour des valeurs dans la modale
            // On récupère le num du Pokemon appelé
            // let modalId = document.querySelector(".pokemon-item")
            // modalId.dataset.id
            // Fonction pour récupérer les données de l'API
            // async function getData() {
            //     fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
            //         .then(response => response.json())
            //         .then(response => { await
            //             console.log(response)
            //             // let detailsId = document.createElement("p")
            //             // detailsId.textContent = pokemon.id;

            //             // modalHeader.appendChild(detailsId)
            //    });
            //}