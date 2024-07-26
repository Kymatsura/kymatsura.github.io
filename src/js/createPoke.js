document.addEventListener('DOMContentLoaded', function () {
    fetch('./js/poke.json')
        .then(response => response.json())
        .then(data => {

        loadJson(data);

        })
})


function loadJson(data){
    const $listagem_pokemon = document.querySelector(".listagem-pokemon");

    let $card_pokemon = "";

    for(let idPoke = 0; idPoke < data.length; idPoke++){

        $card_pokemon += `
            <li class="cartao-pokemon">
            <div class="informacoes">
            <span>${data[idPoke].pokemon_card.name}</span>
            <span>${data[idPoke].pokemon_card.number}</span>
            </div>
            <img src="${data[idPoke].pokemon_card.image.src}" alt="${data[0].pokemon_card.image.alt}" class="gif" />
            <ul class="tipos">
            <li class="tipo ${data[idPoke].pokemon_card.types[0]}"></li>
            <li class="tipo ${data[idPoke].pokemon_card.types[1]}"></li>
            </ul>
            <p class="descricao">
            ${data[idPoke].pokemon_card.description}
            </p>
            </li>
        `
    }

    $listagem_pokemon.innerHTML = $card_pokemon;
}



/*document.addEventListener('DOMContentLoaded', function () {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then(response => response.json())
        .then(data => {

            console.log(data);
            loadJson(data);

        })
})


function loadJson(data){

    const $listagem_pokemon = document.querySelector(".listagem-pokemon");

    let $card_pokemon = "";

    console.log(data.sprites.front_default);

    $card_pokemon += `
        <li class="cartao-pokemon">
        <div class="informacoes">
        <span></span>
        <span>$</span>
        </div>
        <img src="${data.sprites.front_default}" />
        <ul class="tipos">
        <li class="tipo "></li>
        <li class="tipo "></li>
        </ul>
        <p class="descricao">
        </p>
        </li>
    }
    $listagem_pokemon.innerHTML = $card_pokemon;
}
`*/