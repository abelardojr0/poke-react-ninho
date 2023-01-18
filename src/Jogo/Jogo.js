import React from "react";
import { Link } from "react-router-dom";
import { GlobalStorage } from "../GlobalStorage";
import { BotaoSair, ContainerMenu, GlobalStyles, NickName } from "../styles";
import { Links } from "./styleJogo";

const Jogo = () => {
  function limparDados() {
    localStorage.clear();
  }
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <ContainerMenu>
          <NickName>{localStorage.getItem("nickname")}</NickName>
          <Links to="/batalha">Batalha</Links>
          <Links to="/captura">Captura</Links>
          <Links to="/lista">Lista</Links>
          <Link to="/">
            <BotaoSair onClick={limparDados} />
          </Link>
        </ContainerMenu>
      </GlobalStorage>
    </>
  );
};
export default Jogo;
