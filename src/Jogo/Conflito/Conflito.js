import React from "react";
import {
  BotaoFechar,
  CardConflito,
  ImagemVersos,
  Modal,
  ModalContainer,
} from "./styleConflito";
import ImagemVS from "../../Img/vs.png";
import { Link } from "react-router-dom";
const Conflito = ({ pokemonDoJogador, pokemonDoInimigo }) => {
  return (
    <>
      <ModalContainer>
        <Modal>
          <CardConflito>
            <h1>Pokemon do Jogador: </h1>
            <img src={pokemonDoJogador.foto} alt={pokemonDoJogador.nome} />
            <p>{pokemonDoJogador.nome}</p>
          </CardConflito>

          <ImagemVersos src={ImagemVS} alt={"Imagem VS"} />

          <CardConflito>
            <h1>Pokemon do Jogador: </h1>
            <img src={pokemonDoInimigo.foto} alt={pokemonDoInimigo.nome} />
            <p>{pokemonDoInimigo.nome}</p>
          </CardConflito>
          <Link to="/jogo">
            <BotaoFechar>X</BotaoFechar>
          </Link>
        </Modal>
      </ModalContainer>
    </>
  );
};
export default Conflito;
