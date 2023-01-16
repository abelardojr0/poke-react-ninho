import React from "react";
import { GlobalContext } from "../GlobalStorage";
import { LiPokemon, NomePokemon, TipoPokemon } from "./styleLogin";
const pokemonsEscolhidos = [];
let cont = 0;
const CardPokemon = ({
  nome,
  imagem,
  pokemon,
  listaConferencia,
  setListaConferencia,
  tipo,
  setDesabilitado,
}) => {
  const global = React.useContext(GlobalContext);

  function checarLogin() {
    if (listaConferencia.length === 2) {
      setDesabilitado(false);
    }
  }

  function pokemonSelecionado({ target }) {
    checarLogin();
    const nome = target.dataset.nome;
    const cardLi = document.querySelector(
      `[data-li-nome = ${target.dataset.nome}]`
    );
    if (cont < 3 && !listaConferencia.includes(nome)) {
      cardLi.classList.add("ativo");
      pokemonsEscolhidos.push(pokemon);
      global.setPokemonsJogador(pokemonsEscolhidos);
      localStorage.setItem("pokemons", JSON.stringify(pokemonsEscolhidos));
      setListaConferencia([...listaConferencia, nome]);
      cont++;
    } else if (listaConferencia.includes(nome)) {
      return;
    }
  }
  return (
    <LiPokemon
      className={tipo}
      data-nome={nome}
      data-li-nome={nome}
      onClick={pokemonSelecionado}
    >
      <div data-nome={nome}>
        <TipoPokemon className={tipo}>{tipo}</TipoPokemon>
        <NomePokemon>{nome}</NomePokemon>
      </div>
      <img data-nome={nome} src={imagem} alt={nome} />
    </LiPokemon>
  );
};
export default CardPokemon;
