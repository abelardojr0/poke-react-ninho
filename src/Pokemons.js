import React from "react";

const Pokemons = (nivel) => {
  let listaPokemonsPorNivel = [];

  const [listaPokemon, setListaPokemon] = React.useState(null);

  class Pokemon {
    constructor(pokemon) {
      this.nome = pokemon.name;
      this.foto = pokemon.sprites.other.dream_world.front_default;
      this.id = pokemon.id;
    }
  }

  async function detalhesPokemon(poke) {
    const responseDetail = await fetch(poke.url);
    const jsonDetail = await responseDetail.json();
    const pokemonFinal = new Pokemon(jsonDetail);
    return pokemonFinal;
  }

  React.useEffect(() => {
    async function fetchDados() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=55"
      );
      const jsonResponse = await response.json();
      const pokemons = jsonResponse.results;
      const detalhesRequest = pokemons.map((pokemon) =>
        detalhesPokemon(pokemon)
      );
      const pokemonsDetalhes = await Promise.all(detalhesRequest);
      setListaPokemon(pokemonsDetalhes);
    }
    fetchDados();
  }, []);

  if (listaPokemon !== null) {
    if (nivel === 1) {
      listaPokemonsPorNivel = [
        listaPokemon[0],
        listaPokemon[3],
        listaPokemon[6],
        listaPokemon[9],
        listaPokemon[12],
        listaPokemon[15],
        listaPokemon[18],
        listaPokemon[20],
        listaPokemon[22],
        listaPokemon[24],
        listaPokemon[26],
        listaPokemon[28],
        listaPokemon[31],
        listaPokemon[34],
        listaPokemon[36],
        listaPokemon[38],
        listaPokemon[40],
        listaPokemon[42],
        listaPokemon[45],
        listaPokemon[47],
        listaPokemon[49],
        listaPokemon[51],
        listaPokemon[53],
      ];
    } else if (nivel === 2) {
      listaPokemonsPorNivel = [
        listaPokemon[1],
        listaPokemon[4],
        listaPokemon[7],
        listaPokemon[10],
        listaPokemon[13],
        listaPokemon[16],
        listaPokemon[19],
        listaPokemon[21],
        listaPokemon[23],
        listaPokemon[25],
        listaPokemon[27],
        listaPokemon[29],
        listaPokemon[32],
        listaPokemon[35],
        listaPokemon[37],
        listaPokemon[39],
        listaPokemon[41],
        listaPokemon[43],
        listaPokemon[46],
        listaPokemon[48],
        listaPokemon[50],
        listaPokemon[52],
        listaPokemon[54],
      ];
    } else if (nivel === 3) {
      listaPokemonsPorNivel = [
        listaPokemon[2],
        listaPokemon[5],
        listaPokemon[8],
        listaPokemon[11],
        listaPokemon[14],
        listaPokemon[17],
        listaPokemon[30],
        listaPokemon[33],
        listaPokemon[44],
      ];
    }

    return listaPokemonsPorNivel;
  }
};

export default Pokemons;
