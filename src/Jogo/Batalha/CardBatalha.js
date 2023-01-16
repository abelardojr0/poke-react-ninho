import React from "react";
import { LiLista } from "../Lista/styleLista";
let contSelecao = 0;
const CardBatalha = ({
  nome,
  imagem,
  pokemon,
  tipo,
  setSelecionado,
  ListaDePokemonsInimigo,
  setPokemonDoInimigo,
  setPokemonDoJogador,
}) => {
  const listaInimigo = document.querySelector("[data-inimigo]");
  function escolhaDoInimigo() {
    const escolhaAleatoria = Math.floor(Math.random() * 3);
    if (escolhaAleatoria === 0) {
      listaInimigo.classList.add("primeiro");
      setPokemonDoInimigo(ListaDePokemonsInimigo[0]);
    } else if (escolhaAleatoria === 1) {
      listaInimigo.classList.add("segundo");
      setPokemonDoInimigo(ListaDePokemonsInimigo[1]);
    } else if (escolhaAleatoria === 2) {
      listaInimigo.classList.add("terceiro");
      setPokemonDoInimigo(ListaDePokemonsInimigo[2]);
    }
  }
  function pokemonSelecionado({ target }) {
    const alt = target.alt;
    setPokemonDoJogador(pokemon);
    if (alt === undefined && contSelecao === 0) {
      target.classList.add("ativo");
      contSelecao++;
      escolhaDoInimigo();
      setSelecionado(true);
    } else if (alt !== undefined && contSelecao === 0) {
      const li = target.parentElement;
      li.classList.add("ativo");
      contSelecao++;
      escolhaDoInimigo();
      setSelecionado(true);
    }
  }
  return (
    <>
      <LiLista className={tipo} onClick={pokemonSelecionado}>
        <img src={imagem} alt={nome} />
        <p>{nome}</p>
      </LiLista>
    </>
  );
};
export default CardBatalha;
