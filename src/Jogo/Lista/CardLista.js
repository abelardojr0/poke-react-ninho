import React from "react";
import { NomePokemon, TipoPokemon } from "../../Login/styleLogin";
import { LiLista } from "./styleLista";

const CardLista = ({ imagem, nome, tipo }) => {
  return (
    <>
      <LiLista className={tipo}>
        <div data-nome={nome}>
          <TipoPokemon className={tipo}>{tipo}</TipoPokemon>
          <NomePokemon>{nome}</NomePokemon>
        </div>
        <img src={imagem} alt={nome} />
      </LiLista>
    </>
  );
};
export default CardLista;
