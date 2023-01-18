import React from "react";
import { GlobalStorage } from "../../GlobalStorage";
import Pokemons from "../../Pokemons";
import { BotaoSair, ContainerLista, GlobalStyles } from "../../styles";
import Conflito from "../Conflito/Conflito";
// import Conflito from "../Conflito/Conflito";
import { ListaPokemonsJogador, TextoEscolha } from "../Batalha/styleBatalha";
import { Link } from "react-router-dom";
import CardBatalha from "../Batalha/CardBatalha";

const Captura = () => {
  const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

  const [selecionado, setSelecionado] = React.useState(false);
  const [pokemonDoJogador, setPokemonDoJogador] = React.useState(null);
  const [contSelecao, setContSelecao] = React.useState(0);
  const listaDePokemons = Pokemons(1);
  let pokemonSelvagem = "";
  if (listaDePokemons) {
    pokemonSelvagem = listaDePokemons[Math.floor(Math.random() * 23)];
  }

  if (listaDePokemons === undefined) return null;
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
                setPokemonDoJogador={setPokemonDoJogador}
                setSelecionado={setSelecionado}
                contSelecao={contSelecao}
                setContSelecao={setContSelecao}
              />
            ))}
          </ListaPokemonsJogador>

          {selecionado && (
            <>
              <Conflito
                pokemonDoJogador={pokemonDoJogador}
                pokemonDoInimigo={pokemonSelvagem}
                setContSelecao={setContSelecao}
                modo="Captura"
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
export default Captura;
