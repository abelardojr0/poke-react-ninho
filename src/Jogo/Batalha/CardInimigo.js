import React from "react";
import { LiListaInimigo } from "../Lista/styleLista";

const CardInimigo = ({ nome, imagem, id }) => {
  return (
    <>
      <LiListaInimigo id={id}>
        <img src={imagem} alt={nome} />
        <p>{nome}</p>
      </LiListaInimigo>
    </>
  );
};

export default CardInimigo;
