import React from "react";
import { GlobalStorage } from "../GlobalStorage";
import { Container, GlobalStyles } from "../styles";
import { TituloJogo } from "./styleJogo";

const Jogo = () => {
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <TituloJogo>Jogo</TituloJogo>;
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Jogo;
