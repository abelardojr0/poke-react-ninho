import React from "react";
import { GlobalStorage } from "../GlobalStorage";
import CardPokemon from "./CardPokemon";
import Pokemons from "../Pokemons";
import {
  BotaoCadastrar,
  ListaDePokemons,
  Nome,
  Subtitulo,
  Titulo,
} from "./styleLogin";
import { Container, GlobalStyles } from "../styles";
import { Link } from "react-router-dom";
import InputNome from "./InputNome";

const Login = () => {
  const listaDePokemons = Pokemons(2);
  const [listaConferencia, setListaConferencia] = React.useState([]);
  const [desabilitado, setDesabilitado] = React.useState(true);
  const [valorInput, setValorInput] = React.useState("");

  function logando() {
    const valor = document.querySelector("#nome");
    setValorInput(valor);
    console.log(valorInput);
  }
  if (listaDePokemons === []) return null;

  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          <Titulo>Bem vindo a Kanto</Titulo>
          <Nome htmlFor="nome">Escolha o seu nome: </Nome>
          <InputNome type="text" name="nome" id="nome" />
          <Link to="/jogo">
            <BotaoCadastrar disabled={desabilitado} onClick={logando}>
              Entrar
            </BotaoCadastrar>
          </Link>

          <Subtitulo>Escolha 3 pokemons</Subtitulo>
          <ListaDePokemons>
            {listaDePokemons &&
              listaDePokemons.map((pokemon) => (
                <CardPokemon
                  key={pokemon.nome}
                  nome={pokemon.nome}
                  imagem={pokemon.foto}
                  pokemon={pokemon}
                  listaConferencia={listaConferencia}
                  setListaConferencia={setListaConferencia}
                  setDesabilitado={setDesabilitado}
                ></CardPokemon>
              ))}
          </ListaDePokemons>
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Login;
