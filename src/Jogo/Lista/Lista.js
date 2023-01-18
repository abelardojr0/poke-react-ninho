import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../../GlobalStorage";
import { ContainerLista, GlobalStyles } from "../../styles";
import { BotaoSair } from "../../styles";
import CardLista from "./CardLista";
import { ListaPokemons, TituloLista } from "./styleLista";

const Lista = () => {
  const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <ContainerLista>
          <TituloLista>Pokemons: </TituloLista>
          <ListaPokemons>
            {LSPokemons.map((pokemon) => (
              <CardLista
                key={pokemon.nome}
                nome={pokemon.nome}
                tipo={pokemon.type}
                imagem={pokemon.foto}
              />
            ))}
          </ListaPokemons>
          <Link to="/jogo">
            <BotaoSair />
          </Link>
        </ContainerLista>
      </GlobalStorage>
    </>
  );
};
export default Lista;
