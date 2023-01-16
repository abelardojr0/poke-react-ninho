import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../../GlobalStorage";
import Pokemons from "../../Pokemons";
import { Container, GlobalStyles } from "../../styles";
import Conflito from "../Conflito/Conflito";
// import Conflito from "../Conflito/Conflito";
import {
  BotaoVoltar,
  ListaPokemonsInimigo,
  ListaPokemonsJogador,
} from "../Lista/styleLista";
import CardBatalha from "./CardBatalha";
import CardInimigo from "./CardInimigo";

const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

const Batalha = () => {
  const [selecionado, setSelecionado] = React.useState(false);
  const [pokemonDoInimigo, setPokemonDoInimigo] = React.useState(null);
  const [pokemonDoJogador, setPokemonDoJogador] = React.useState(null);

  const listaDePokemons = Pokemons(1);

  const ListaDePokemonsInimigo = React.useMemo(() => {
    let pokemonsInimigo = [];
    if (listaDePokemons !== undefined) {
      pokemonsInimigo = [
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
      ];
    }
    return pokemonsInimigo;
  }, [listaDePokemons]);

  // function fecharModal() {
  //   setSelecionado(false);
  // }
  if (pokemonDoInimigo && pokemonDoJogador) {
    console.log("Pokemon do jogador " + pokemonDoJogador.nome);
    console.log("Pokemon do Inimigo " + pokemonDoInimigo.nome);
  }

  if (ListaDePokemonsInimigo === undefined) return null;
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <h1>Lista dos pokemons do jogador: </h1>
          <p>Escolha o pokemons que você vai usar na batalha: </p>
          <ListaPokemonsJogador>
            {LSPokemons.map((pokemon) => (
              <CardBatalha
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
                pokemon={pokemon}
                ListaDePokemonsInimigo={ListaDePokemonsInimigo}
                setPokemonDoInimigo={setPokemonDoInimigo}
                setPokemonDoJogador={setPokemonDoJogador}
                setSelecionado={setSelecionado}
              />
            ))}
          </ListaPokemonsJogador>
          <h1>Lista dos pokemons do Inimigo: </h1>
          <ListaPokemonsInimigo data-inimigo>
            {ListaDePokemonsInimigo.map((pokemon) => (
              <CardInimigo
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
                id={pokemon.id}
              />
            ))}
          </ListaPokemonsInimigo>
          {selecionado && (
            <>
              <Conflito
                pokemonDoJogador={pokemonDoJogador}
                pokemonDoInimigo={pokemonDoInimigo}
              />
            </>
          )}
          <Link to="/jogo">
            <BotaoVoltar>Voltar</BotaoVoltar>
          </Link>
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Batalha;
