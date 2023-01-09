import React from "react";
import { GlobalStorage } from "../GlobalStorage";
import CardPokemon from "./CardPokemon";
import {
  BotaoCadastrar,
  Container,
  GlobalStyles,
  ListaDePokemons,
  Nome,
  NomeInput,
  Subtitulo,
  Titulo,
} from "./styleLogin";

let listaPokemonsNivel1 = [];

const Login = () => {
  const [listaPokemon, setListaPokemon] = React.useState(null);

  class Pokemon {
    constructor(pokemon) {
      this.nome = pokemon["name"];
      this.foto = pokemon.sprites.other.dream_world.front_default;
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
    listaPokemonsNivel1 = [
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
    // const listaPokemonsNivel2 = [
    //   listaPokemon[1],
    //   listaPokemon[4],
    //   listaPokemon[7],
    //   listaPokemon[10],
    //   listaPokemon[13],
    //   listaPokemon[16],
    //   listaPokemon[19],
    //   listaPokemon[21],
    //   listaPokemon[23],
    //   listaPokemon[25],
    //   listaPokemon[27],
    //   listaPokemon[29],
    //   listaPokemon[32],
    //   listaPokemon[35],
    //   listaPokemon[37],
    //   listaPokemon[39],
    //   listaPokemon[41],
    //   listaPokemon[43],
    //   listaPokemon[46],
    //   listaPokemon[48],
    //   listaPokemon[50],
    //   listaPokemon[52],
    //   listaPokemon[54],
    // ];

    // const listaPokemonsNivel3 = [
    //   listaPokemon[2],
    //   listaPokemon[5],
    //   listaPokemon[8],
    //   listaPokemon[11],
    //   listaPokemon[14],
    //   listaPokemon[17],
    //   listaPokemon[30],
    //   listaPokemon[33],
    //   listaPokemon[44],
    // ];
  }

  if (listaPokemonsNivel1 === []) return null;
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <Titulo>Bem vindo a Kanto</Titulo>
          <Nome htmlFor="nome">Escolha o seu nome: </Nome>
          <NomeInput type="text" name="nome" id="nome" />
          <BotaoCadastrar>Entrar</BotaoCadastrar>
          <Subtitulo>Escolha 3 pokemons</Subtitulo>
          <ListaDePokemons>
            {listaPokemonsNivel1 &&
              listaPokemonsNivel1.map((pokemon) => (
                <CardPokemon
                  key={pokemon.nome}
                  nome={pokemon.nome}
                  imagem={pokemon.foto}
                  pokemon={pokemon}
                ></CardPokemon>
              ))}
          </ListaDePokemons>
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Login;
