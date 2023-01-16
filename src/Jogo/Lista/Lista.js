import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../../GlobalStorage";
import { ContainerLista, GlobalStyles } from "../../styles";
import { BotaoSair } from "../styleJogo";
import CardLista from "./CardLista";
import { BotaoVoltar, ListaPokemonsJogador, TituloLista } from "./styleLista";
const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

const Lista = () => {
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <ContainerLista>
          <TituloLista>Pokemons: </TituloLista>
          <ListaPokemonsJogador>
            {LSPokemons.map((pokemon) => (
              <CardLista
                key={pokemon.nome}
                nome={pokemon.nome}
                tipo={pokemon.type}
                imagem={pokemon.foto}
              />
            ))}
          </ListaPokemonsJogador>
          <Link to="/jogo">
            <BotaoSair />
          </Link>
        </ContainerLista>
      </GlobalStorage>
    </>
  );
};
export default Lista;
