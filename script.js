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
// Nombre de pokemon à afficher à l'utilisateur
fetchPokemons(151);

// Fonction pour renvoyer les données à l'utilisateur
function createPokemon(pokemon) {
    console.log(pokemon);
    
    let card = document.createElement('div');
    card.classList.add('pokemon-item');
    // card.setAttribute("data-id", `${pokemon.id}`)
    let pokemonId = `#${pokemon.id.toString().padStart(3, 0)}`;
    let pokemonWeight = `${pokemon.weight} kg`;
    let pokemonHeight = `${pokemon.height} m`;

    let pokemonInnerHTML = `
        <div class="card">
            <p>${pokemonId}</p>
            <div class="img-container"><img src="${pokemon.sprites.front_default}" alt = "pokemon image ${pokemon.name}"></div>
            <p>${pokemon.name}</p>
        </div>
        <div id="pokemonModal_${pokemon.id}" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="material-symbols-outlined" id="close_${pokemon.id}" class="close">arrow_back</span>
                    <h2>${pokemon.name}</h2>
                    <p>${pokemonId}</p>
                </div>
                <div class="modal-img"><img src="${pokemon.sprites.front_default}" alt = "pokemon image ${pokemon.name}"/></div>
                <section class="modal-body">
                    <div class="type">
                        <p>${pokemon.types[0].type.name}</p>
                        <p>${pokemon.types[1].type.name}</p>
                    </div>
                    <p>About</p>
                    <div class="skills">
                        <div>
                            <span class="material-symbols-outlined">upload_file</span>
                            <p>${pokemonWeight}</p>
                            <p>Weight</p>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">upload_file</span>
                            <p>${pokemonHeight}</p>
                            <p>Height</p>
                        </div>
                        <div>
                            <p>${pokemon.abilities[0].ability.name}</p>
                            <p>${pokemon.abilities[1].ability.name}</p>
                            <p>Moves</p>
                        </div>
                    </div>
                    <div class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quo, pariatur nisi accusantium tempore culpa cum odit nam fuga? Provident at rem quidem modi sapiente ab corporis consequatur incidunt aliquam.</div>
                    <div class="stats">
                            <p>Base Stats</p>                    
                            <div class="hp">
                            <p>HP</p>
                            <p>045</p>
                            <div></div>
                        </div>
                        <div class="atk">
                            <p>ATK</p>
                            <p>049</p>
                            <div></div>
                        </div>
                        <div class="def">
                            <p>DEF</p>
                            <p>049</p>
                            <div></div>
                        </div>
                        <div class="satk">
                            <p>SATK</p>
                            <p>065</p>
                            <div></div>
                        </div>
                        <div class="sdef">
                            <p>SDEF</p>
                            <p>065</p>
                            <div></div>
                        </div>
                        <div class="spd">
                            <p>SPD</p>
                            <p>045</p>
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;

    card.innerHTML = pokemonInnerHTML;
    card.addEventListener('click', () => {
        let modal = document.querySelector(`#pokemonModal_${pokemon.id}`);
        let span = document.querySelector(`#close_${pokemon.id}`);
        modal.style.display = 'block';
        window.onclick = function(event) {
            if (event.target == modal || event.target == span) {
                modal.style.display = 'none';
            }
        }
    })

    pokeList.appendChild(card);
    // Réécriture avec .innerHTML + une fenêtre modale

}

// // Modale
// let modalHeader = document.querySelector(".modal-header")

// window.onload = () => {
//     // On récupère tous les boutons d'ouverture de modale
//     const modalButtons = document.querySelectorAll("[data-toggle=modal]");
    
//     // let cardSelected = function(buttonIndex) {
//     //     console.log("buttonIndex :" buttonIndex);
//     // }
//     // modalButtons.forEach(function(button, index) {
//     //     button.addEventListener("click", function() {
//     //         cardSelected(index);
//     //     })
//     // })
    
//     for(let button of modalButtons){
//         button.addEventListener("click", function(e){
//             // On empêche la navigation
//             e.preventDefault();
//             // On récupère le data-target
//             let target = this.dataset.target
//             // On récupère la bonne modale
//             let modal = document.querySelector(target);
//             // On affiche la modale
//             modal.classList.add("show");
//             // On récupère les boutons de fermeture
//             const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
            
//             for(let close of modalClose){
//                 close.addEventListener("click", () => {
//                     modal.classList.remove("show");
//                 });
//             }            
//             // On gère la fermeture lors du clic sur la zone grise
//             modal.addEventListener("click", function(){
//                 this.classList.remove("show");
//             });
//             // On évite la propagation du clic d'un enfant à son parent
//             modal.children[0].addEventListener("click", function(e){
//                 e.stopPropagation();
//             })
//         });
//     }
// }

// Test supp renvoie des datas dans la modale
// let openBtn = document.querySelectorAll(`[data-target="#modal"]`)
// console.log(openBtn)

// openBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     let modalId = document.querySelector(".pokemon-item");
//     console.log(modalId.datatset.id)
// })
// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//     .then(response => response.json())
//     .then(data => console.log(data))

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