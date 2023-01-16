import React from "react";
import { GlobalContext } from "../GlobalStorage";
import { LiPokemon } from "./styleLogin";
const pokemonsEscolhidos = [];
let cont = 0;
const CardPokemon = ({
  nome,
  imagem,
  pokemon,
  listaConferencia,
  setListaConferencia,
  setDesabilitado,
}) => {
  const global = React.useContext(GlobalContext);

  if (listaConferencia.length === 3) {
    setDesabilitado(false);
  }

  function pokemonSelecionado({ target }) {
    const alt = target.alt;

    if (
      alt === undefined &&
      cont < 3 &&
      !listaConferencia.includes(target.children[0].alt)
    ) {
      const imagemFilha = target.children[0];
      target.classList.add("ativo");
      pokemonsEscolhidos.push(pokemon);
      global.setPokemonsJogador(pokemonsEscolhidos);
      localStorage.setItem("pokemons", JSON.stringify(pokemonsEscolhidos));
      setListaConferencia([...listaConferencia, imagemFilha.alt]);

      cont++;
    } else if (
      alt !== undefined &&
      cont < 3 &&
      !listaConferencia.includes(alt)
    ) {
      const li = target.parentElement;
      li.classList.add("ativo");

      pokemonsEscolhidos.push(pokemon);
      global.setPokemonsJogador(pokemonsEscolhidos);
      localStorage.setItem("pokemons", JSON.stringify(pokemonsEscolhidos));
      setListaConferencia([...listaConferencia, alt]);
      cont++;
    } else if (
      listaConferencia.includes(alt) ||
      listaConferencia.includes(target.children[0].alt)
    ) {
      return;
    }
  }
  return (
    <LiPokemon onClick={pokemonSelecionado}>
      <img src={imagem} alt={nome} />
      {nome}
    </LiPokemon>
  );
};
export default CardPokemon;
