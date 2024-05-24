function Enviar() {
    let id = $("#input").val();
    BuscarPokemon(id)
}

function BuscarPokemon(idPokemon) {
    $(document).ready(function () {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}`,
            method: 'GET',
            success: function (response) {
                const pokemonInfo = `
                    <h2>${response.name}</h2>
                    <img src="${response.sprites.front_default}" alt="${response.name}">
                    <p>Tipo: ${response.types[0].type.name}</p>
                    <p>Peso: ${response.weight/10} KG</p>
                    <p>Altura: ${response.height/10} M</p>
                `;
                $('#pokemon-info').html(pokemonInfo);
            },
            error: function (xhr, status, error) {
                console.error(status, error);
                $('#pokemon-info').html('<p>Erro ao carregar informações do Pokémon.</p>');
            }
        });
    });
}