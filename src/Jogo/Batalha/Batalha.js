import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../../GlobalStorage";
import Pokemons from "../../Pokemons";
import { Container, GlobalStyles } from "../../styles";
import CardLista from "../Lista/CardLista";
import { BotaoVoltar, ListaPokemonsJogador } from "../Lista/styleLista";

const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

const Batalha = () => {
  const listaDePokemons = Pokemons(1);
  let pokemonsInimigo = [];
  if (listaDePokemons !== undefined) {
    pokemonsInimigo = [
      listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
      listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
      listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
    ];
  }

  if (pokemonsInimigo === []) return null;
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <h1>Lista dos pokemons do jogador: </h1>
          <p>Escolha o pokemons que você vai usar na batalha: </p>
          <ListaPokemonsJogador>
            {LSPokemons.map((pokemon) => (
              <CardLista
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
              />
            ))}
          </ListaPokemonsJogador>
          <h1>Lista dos pokemons do Inimigo: </h1>
          <ListaPokemonsJogador>
            {pokemonsInimigo.map((pokemon) => (
              <CardLista
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
              />
            ))}
          </ListaPokemonsJogador>
          <Link to="/jogo">
            <BotaoVoltar>Voltar</BotaoVoltar>
          </Link>
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Batalha;
