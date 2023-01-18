import React from "react";
import { NomePokemon, TipoPokemon } from "../../Login/styleLogin";
import { LiLista } from "../../styles";

const CardLista = ({ imagem, nome, tipo }) => {
  console.log(tipo);
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
