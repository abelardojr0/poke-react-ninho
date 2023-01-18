import React from "react";
import { GlobalStorage } from "../GlobalStorage";
import CardPokemon from "./CardPokemon";
import Pokemons from "../Pokemons";
import {
  BotaoCadastrar,
  BotaoEntrar,
  Formulario,
  ListaDePokemons,
  NomeInput,
  Subtitulo,
  Titulo,
} from "./styleLogin";
import { Container, GlobalStyles, NickName } from "../styles";
import { Link } from "react-router-dom";

const Login = () => {
  const listaDePokemons = Pokemons(1);
  const [listaConferencia, setListaConferencia] = React.useState([]);
  const [logado, setLogado] = React.useState(false);
  const [desabilitado, setDesabilitado] = React.useState(true);
  if (listaDePokemons === []) return null;

  function validarInput({ target }) {
    if (target.value.length >= 3) {
      setDesabilitado(false);
    } else {
      setDesabilitado(true);
    }
  }

  function logarNoJogo() {
    setLogado(true);
    setDesabilitado(true);
    localStorage.setItem("nickname", document.querySelector("#nome").value);
    localStorage.setItem("nivel", 1);
  }

  return (
    <>
      <GlobalStorage>
        <GlobalStyles />
        <Container>
          {!logado && (
            <>
              <Titulo>Bem vindo</Titulo>
              <Formulario>
                <NomeInput
                  onChange={validarInput}
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Nickname"
                />
                <BotaoCadastrar onClick={logarNoJogo} disabled={desabilitado}>
                  Entrar
                </BotaoCadastrar>
              </Formulario>
            </>
          )}

          {logado && (
            <>
              <NickName>{localStorage.getItem("nickname")}</NickName>
              <Subtitulo>Escolha 3 pokemons</Subtitulo>
              <ListaDePokemons>
                {listaDePokemons &&
                  listaDePokemons.map((pokemon) => (
                    <CardPokemon
                      key={pokemon.nome}
                      nome={pokemon.nome}
                      imagem={pokemon.foto}
                      pokemon={pokemon}
                      tipo={pokemon.type}
                      listaConferencia={listaConferencia}
                      setListaConferencia={setListaConferencia}
                      setDesabilitado={setDesabilitado}
                    ></CardPokemon>
                  ))}
              </ListaDePokemons>
              <Link to="/jogo">
                <BotaoEntrar disabled={desabilitado}>Entrar</BotaoEntrar>
              </Link>
            </>
          )}
        </Container>
      </GlobalStorage>
    </>
  );
};
export default Login;
