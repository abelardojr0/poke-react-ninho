import React from "react";
import { GlobalStorage } from "../GlobalStorage";
import { Container, GlobalStyles } from "../styles";
import { Links, TituloJogo } from "./styleJogo";
// const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

const Jogo = () => {
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <TituloJogo>Jogo</TituloJogo>
          {/* {LSPokemons.map((pokemon) => (
            <img src={pokemon.foto} alt={pokemon.nome} />
          ))} */}
          <Links to="/batalha">Batalha</Links>
          <Links to="/duelo">Duelo</Links>
          <Links to="/lista">Lista</Links>
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Jogo;
