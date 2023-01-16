import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../GlobalStorage";
import { ContainerMenu, GlobalStyles } from "../styles";
import { BotaoSair, Links } from "./styleJogo";

const Jogo = () => {
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <ContainerMenu>
          <Links to="/batalha">Batalha</Links>
          <Links to="/duelo">Duelo</Links>
          <Links to="/lista">Lista</Links>
          <Link to="/">
            <BotaoSair />
          </Link>
        </ContainerMenu>
      </GlobalStorage>
    </>
  );
};
export default Jogo;
