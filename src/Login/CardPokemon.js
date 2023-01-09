import React from "react";
import { GlobalContext } from "../GlobalStorage";
import { LiPokemon } from "./styleLogin";
let cont = 0;
const pokemonsEscolhidos = [];

const CardPokemon = ({ nome, imagem, pokemon }) => {
  const global = React.useContext(GlobalContext);

  function pokemonSelecionado({ target }) {
    if (
      target.alt === undefined &&
      cont < 3 &&
      !pokemonsEscolhidos.includes(target.alt)
    ) {
      target.style.border = "2px solid white";
      target.style.color = "white";
      pokemonsEscolhidos.push(pokemon);
      global.setPokemonsJogador(pokemonsEscolhidos);
    } else if (cont < 3 && !pokemonsEscolhidos.includes(target.alt)) {
      const li = target.parentElement;
      li.style.border = "2px solid white";
      li.style.color = "white";
      pokemonsEscolhidos.push(pokemon);
      global.setPokemonsJogador(pokemonsEscolhidos);

      cont++;
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
