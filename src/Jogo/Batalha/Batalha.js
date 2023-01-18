import React from "react";
import { GlobalStorage } from "../../GlobalStorage";
import Pokemons from "../../Pokemons";
import { BotaoSair, ContainerLista, GlobalStyles } from "../../styles";
import Conflito from "../Conflito/Conflito";
// import Conflito from "../Conflito/Conflito";
import {
  ListaPokemonsInimigo,
  ListaPokemonsJogador,
  TextoEscolha,
} from "./styleBatalha";
import CardBatalha from "./CardBatalha";
import CardInimigo from "./CardInimigo";
import { Link } from "react-router-dom";

const Batalha = () => {
  const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
  const [selecionado, setSelecionado] = React.useState(false);
  const [pokemonDoInimigo, setPokemonDoInimigo] = React.useState(null);
  const [pokemonDoJogador, setPokemonDoJogador] = React.useState(null);
  const [contSelecao, setContSelecao] = React.useState(0);
  const listaDePokemons = Pokemons(1);

  const ListaDePokemonsInimigo = React.useMemo(() => {
    let pokemonsInimigo = [];
    if (listaDePokemons !== undefined) {
      pokemonsInimigo = [
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
        listaDePokemons[Math.floor(Math.random() * listaDePokemons.length)],
      ];
    }
    return pokemonsInimigo;
  }, [listaDePokemons]);

  if (ListaDePokemonsInimigo === undefined) return null;
  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <ContainerLista>
          <TextoEscolha>
            Escolha o pokemons que você vai usar na batalha:{" "}
          </TextoEscolha>
          <ListaPokemonsJogador>
            {LSPokemons.map((pokemon) => (
              <CardBatalha
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
                tipo={pokemon.type}
                pokemon={pokemon}
                ListaDePokemonsInimigo={ListaDePokemonsInimigo}
                setPokemonDoInimigo={setPokemonDoInimigo}
                setPokemonDoJogador={setPokemonDoJogador}
                setSelecionado={setSelecionado}
                contSelecao={contSelecao}
                setContSelecao={setContSelecao}
              />
            ))}
          </ListaPokemonsJogador>
          <TextoEscolha>Lista dos pokemons do Inimigo: </TextoEscolha>
          <ListaPokemonsInimigo data-inimigo>
            {ListaDePokemonsInimigo.map((pokemon) => (
              <CardInimigo
                key={pokemon.nome}
                nome={pokemon.nome}
                imagem={pokemon.foto}
                tipo={pokemon.type}
                id={pokemon.id}
              />
            ))}
          </ListaPokemonsInimigo>
          {selecionado && (
            <>
              <Conflito
                pokemonDoJogador={pokemonDoJogador}
                pokemonDoInimigo={pokemonDoInimigo}
                setContSelecao={setContSelecao}
                modo="Batalha"
              />
            </>
          )}
          <Link to="/jogo">
            <BotaoSair />
          </Link>
        </ContainerLista>
      </GlobalStorage>
    </>
  );
};
export default Batalha;
