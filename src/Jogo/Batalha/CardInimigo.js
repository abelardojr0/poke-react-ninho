import React from "react";
import { LiLista } from "../../styles";

const CardInimigo = ({ nome, imagem, id, tipo }) => {
  return (
    <>
      <LiLista className={tipo} id={id}>
        <img src={imagem} alt={nome} />
        <p>{nome}</p>
      </LiLista>
    </>
  );
};

export default CardInimigo;
