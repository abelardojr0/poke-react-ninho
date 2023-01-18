import React from "react";
import { LiLista } from "../../styles";

const CardBatalha = ({
  nome,
  imagem,
  pokemon,
  tipo,
  setSelecionado,
  ListaDePokemonsInimigo,
  setPokemonDoInimigo,
  setPokemonDoJogador,
  contSelecao,
  setContSelecao,
}) => {
  function escolhaDoInimigo() {
    if (ListaDePokemonsInimigo) {
      const escolhaAleatoria = Math.floor(Math.random() * 3);
      if (escolhaAleatoria === 0) {
        setPokemonDoInimigo(ListaDePokemonsInimigo[0]);
      } else if (escolhaAleatoria === 1) {
        setPokemonDoInimigo(ListaDePokemonsInimigo[1]);
      } else if (escolhaAleatoria === 2) {
        setPokemonDoInimigo(ListaDePokemonsInimigo[2]);
      }
    }
  }

  function pokemonSelecionado({ target }) {
    const alt = target.alt;
    setPokemonDoJogador(pokemon);
    if (alt === undefined && contSelecao === 0) {
      target.classList.add("ativo");
      setContSelecao(1);
      escolhaDoInimigo();
      setSelecionado(true);
    } else if (alt !== undefined && contSelecao === 0) {
      const li = target.parentElement;
      li.classList.add("ativo");
      setContSelecao(1);
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
