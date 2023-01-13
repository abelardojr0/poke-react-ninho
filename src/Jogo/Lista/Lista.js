import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../../GlobalStorage";
import { ListaDePokemons } from "../../Login/styleLogin";
import { Container, GlobalStyles } from "../../styles";
import CardLista from "./CardLista";
import { BotaoVoltar, ListaPokemonsJogador } from "./styleLista";
const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

const Lista = () => {
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <h1>Lista dos pokemons do jogador: </h1>
          <ListaPokemonsJogador>
            {LSPokemons.map((pokemon) => (
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
export default Lista;
