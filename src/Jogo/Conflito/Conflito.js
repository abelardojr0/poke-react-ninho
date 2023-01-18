import React from "react";
import {
  BotaoBatalhar,
  BotaoFechar,
  BotaoRelatorio,
  CardConflito,
  DetalhesRelatorio,
  DivisoriaRelatorio,
  ImagemVersos,
  MensagemCarregando,
  Modal,
  ModalContainer,
  ModalRelatorio,
  NomeRelatorio,
} from "./styleConflito";
import ImagemVS from "../../Img/vs.png";
import { Link } from "react-router-dom";
const Conflito = ({
  pokemonDoJogador,
  pokemonDoInimigo,
  setContSelecao,
  modo,
}) => {
  const LSPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
  const novaListaPokemons = LSPokemons;
  const experiencia = localStorage.getItem("experiencia");
  const [condicaoJogador, setCondicaoJogador] = React.useState(null);
  const [condicaoInimigo, setCondicaoInimigo] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [relatorio, setRelatorio] = React.useState(false);
  let vitorioso = "";

  // function checarVantagens(vantagens, inimigo) {
  //   let vantagem = false; // A VARIAVEL COMEÇA EM FALSE

  //   if (vantagens.includes(inimigo.type)) {
  //     // SE O TIPO DO POKEMON INIMIGO EXISTIR A LISTA DE VANTAGENS DO POKEMON ATUAL, ISSO QUER DIZER QUE O POKEMON ATUAL TEM VANTAGEM SOBRE ESSE INIMIGO, ENTÃO A VARIAVEL SE TORNA TRUE
  //     vantagem = true;
  //     return vantagem;
  //   }
  // }

  let [hpPokemonJogador, hpPokemonInimigo] = [
    pokemonDoJogador.hp,
    pokemonDoInimigo.hp,
  ]; //ATRIBUO A VIDA DOS DOIS POKEMONS EM QUESTÃO A DUAS VARIAVEIS PARA PODER MANIPULALAS LIVREMENTE
  let [acertosPokemonJogador, acertosPokemonInimigo] = [0, 0]; //VARIAVEL CRIADA PARA CONTAR QUANTOS ACERTOS CADA POKEMON OBTEVE
  let contRound = 0;

  // const vantagemPokemonJogador = checarVantagens(
  //   pokemonDoJogador.vantagens,
  //   pokemonInimigo
  // ); //VARIAVEL BOOLEANA QUE VAI REVIRIFICAR SE O POKEMON DO JOGADOR POSSUI VANTAGEM SOBRE O DO INIMIGO
  // const vantagemPokemonInimigo = checarVantagens(
  //   pokemonInimigo.vantagens,
  //   pokemonDoJogador
  // ); //VARIAVEL BOOLEANA QUE VAI REVIRIFICAR SE O POKEMON DO INIMIGO POSSUI VANTAGEM SOBRE O DO JOGADOR

  // let [modificadorVantagemPokemonJogador, modificadorVantagemPokemonInimigo] =
  //   [0, 0]; //VARIAVEIS QUE VÃO RECEBER O MODIFICAR QUE VAI SER ADICIONADO NO DANO CASO O POKEMON TENHA VANTAGEM.

  // if (vantagemPokemonJogador) {
  //   //SE A VANTAGEM FOR TRUE...
  //   modificadorVantagemPokemonJogador = 10;
  // }
  // if (vantagemPokemonInimigo) {
  //   modificadorVantagemPokemonInimigo = 10;
  // }

  while (hpPokemonJogador > 0 && hpPokemonInimigo > 0) {
    //LOOP QUE VAI FAZER A BATALHA ACONTECER ENQUANTO TIVER UM POKEMON VIVO.
    let [tentativaPokemonJogador, tentativaPokemonInimigo] = [
      Math.random() - 0.5,
      Math.random() - 0.5,
    ]; //VARIÁVEIS QUE VÃO ARMAZENAR UM NÚMERO ALETÓRIO ENTRE 0 E 1 E DIMINUIR 0.5, GERANDO 50% DE CHANCE DE ACERTO PARA CADA TENTATIVA DE ATAQUE DE CADA POKEMON

    if (tentativaPokemonJogador > 0 && hpPokemonJogador > 0) {
      // SE A TENTATIVA FOI BEM SUCEDIDA E O POKEMON ESTÁ VIVO ENTÃO...

      hpPokemonInimigo -=
        pokemonDoJogador.ataque - pokemonDoInimigo.defesa * 0.65;
      acertosPokemonJogador += 1;
    }
    if (tentativaPokemonInimigo > 0 && hpPokemonInimigo > 0) {
      hpPokemonJogador -=
        pokemonDoInimigo.ataque - pokemonDoJogador.defesa * 0.65;
      acertosPokemonInimigo += 1;
    }
    contRound += 1;

    console.log(`
          Round ${contRound}
          ${
            pokemonDoJogador.nome
          } acertou um total de ${acertosPokemonJogador} ataques
          ${
            pokemonDoInimigo.nome
          } acertou um total de ${acertosPokemonInimigo} ataques
          Vida do ${pokemonDoJogador.nome} = ${hpPokemonJogador.toFixed(2)}
          Vida do ${pokemonDoInimigo.nome} = ${hpPokemonInimigo.toFixed(2)}`); //STATUS DE CADA RODADA DE BATALHA
  }

  if (hpPokemonJogador <= 0 && hpPokemonInimigo > hpPokemonJogador) {
    //CHECA SE O POKEMON DO INIMIGO GANHOU
    console.log(
      `${pokemonDoInimigo.nome} ganhou de ${
        pokemonDoJogador.nome
      } e sobrou ${hpPokemonInimigo.toFixed(2)} pontos de vida`
    );
    // vencedor = pokemonDoInimigo.nome;
    vitorioso = "inimigo";
  } else if (hpPokemonInimigo <= 0 && hpPokemonJogador > hpPokemonInimigo) {
    //CHECA SE O POKEMON DO JOGADOR GANHOU
    console.log(
      `${pokemonDoJogador.nome} ganhou de ${
        pokemonDoInimigo.nome
      }  e sobrou ${hpPokemonJogador.toFixed(2)} pontos de vida`
    );
    // vencedor = pokemonDoJogador.nome;
    vitorioso = "jogador";

    if (modo === "Captura") {
      novaListaPokemons.push(pokemonDoInimigo);
      localStorage.setItem("pokemons", JSON.stringify(novaListaPokemons));
    } else if (modo === "Batalha") {
      let novaExperiencia = +experiencia + 1;
      localStorage.setItem("experiencia", novaExperiencia);
    }
  } else {
    //SE NÃO EM CASOS RAROS, ELES EMPATAM
    console.log("Os pokemons empataram");
  }
  function resetarPokemons() {
    setContSelecao(0);
  }
  function iniciarBatalha() {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      if (vitorioso === "inimigo") {
        setCondicaoInimigo("vencedor");
        setCondicaoJogador("perdedor");
      } else if (vitorioso === "jogador") {
        setCondicaoJogador("vencedor");
        setCondicaoInimigo("perdedor");
      }
    }, 2000);
  }

  function abrirRelatorio() {
    setRelatorio(true);
  }
  function fecharRelatorio() {
    setRelatorio(false);
  }
  return (
    <>
      <ModalContainer>
        <Modal>
          <BotaoRelatorio onClick={abrirRelatorio}>Relatório</BotaoRelatorio>
          {relatorio && (
            <>
              <ModalContainer>
                <ModalRelatorio>
                  <DivisoriaRelatorio>
                    <img
                      src={pokemonDoJogador.foto}
                      alt={pokemonDoJogador.nome}
                    />
                    <NomeRelatorio>{pokemonDoJogador.nome}</NomeRelatorio>
                    <DetalhesRelatorio>
                      <p>
                        Acertos: <span>{acertosPokemonJogador}</span>
                      </p>
                      <p>
                        Vida Inicial: <span>{pokemonDoJogador.hp}</span>
                      </p>
                      <p>
                        Vida Restante: <span>{hpPokemonJogador}</span>
                      </p>
                      <p>
                        Ataque: <span>{pokemonDoJogador.ataque}</span>
                      </p>
                      <p>
                        Defesa: <span>{pokemonDoJogador.defesa}</span>
                      </p>
                    </DetalhesRelatorio>
                  </DivisoriaRelatorio>
                  <DivisoriaRelatorio>
                    <img
                      src={pokemonDoInimigo.foto}
                      alt={pokemonDoInimigo.nome}
                    />

                    <NomeRelatorio>{pokemonDoInimigo.nome}</NomeRelatorio>
                    <DetalhesRelatorio>
                      <p>
                        Acertos: <span>{acertosPokemonInimigo}</span>
                      </p>
                      <p>
                        Vida Inicial: <span>{pokemonDoInimigo.hp}</span>
                      </p>
                      <p>
                        Vida Restante: <span>{hpPokemonInimigo}</span>
                      </p>
                      <p>
                        Ataque: <span>{pokemonDoInimigo.ataque}</span>
                      </p>
                      <p>
                        Defesa: <span>{pokemonDoInimigo.defesa}</span>
                      </p>
                    </DetalhesRelatorio>
                    <BotaoFechar onClick={fecharRelatorio}>X</BotaoFechar>
                  </DivisoriaRelatorio>
                </ModalRelatorio>
              </ModalContainer>
            </>
          )}
          <CardConflito className={condicaoJogador}>
            <h1>JOGADOR:</h1>
            <img src={pokemonDoJogador.foto} alt={pokemonDoJogador.nome} />
            <p>{pokemonDoJogador.nome}</p>
          </CardConflito>

          <ImagemVersos src={ImagemVS} alt={"Imagem VS"} />

          {carregando && (
            <>
              <MensagemCarregando>
                Aguarde a batalha terminar...
              </MensagemCarregando>
            </>
          )}

          <CardConflito className={condicaoInimigo}>
            <h1>INIMIGO:</h1>
            <img src={pokemonDoInimigo.foto} alt={pokemonDoInimigo.nome} />
            <p>{pokemonDoInimigo.nome}</p>
          </CardConflito>
          <Link to="/jogo">
            <BotaoFechar onClick={resetarPokemons}>X</BotaoFechar>
          </Link>
        </Modal>
        <BotaoBatalhar onClick={iniciarBatalha}>Batalhar</BotaoBatalhar>
      </ModalContainer>
    </>
  );
};
export default Conflito;
