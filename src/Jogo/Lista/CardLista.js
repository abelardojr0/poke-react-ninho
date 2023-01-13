import React from "react";
import { LiLista } from "./styleLista";

const CardLista = ({ imagem, nome }) => {
  return (
    <>
      <LiLista>
        <img src={imagem} alt={nome} />
        <p>{nome}</p>
      </LiLista>
    </>
  );
};
export default CardLista;
