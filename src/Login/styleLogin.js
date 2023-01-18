import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "Pokemon Solid", sans-serif;
  font-size: 4rem;
  color: #000c1e;
  margin-bottom: 20px;
  text-shadow: -1px -1px 0px #fff, -1px 1px 0px #fff, 1px -1px 0px #fff,
    1px 0px 0px #fff;
`;
export const Subtitulo = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

export const FormularioLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NomeInput = styled.input`
  outline: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  width: 300px;
  border: 2px solid white;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 15px;
  font-weight: bold;
  &::placeholder {
    color: white;
  }
`;

export const BotaoCadastrar = styled.button`
  margin-top: 20px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(29, 128, 211, 1) 0%,
    rgba(32, 232, 221, 1) 100%
  );
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15px;
  animation: pulsando 1500ms infinite ease-in-out;
  border: 2px solid white;
  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(27, 62, 74, 1) 0%,
      rgba(85, 141, 158, 1) 100%
    );
    border: 2px solid black;
    color: #f3f3f3;
    animation: none;
  }

  @keyframes pulsando {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const BotaoEntrar = styled.button`
  background: linear-gradient(
    90deg,
    rgba(29, 128, 211, 1) 0%,
    rgba(32, 232, 221, 1) 100%
  );
  border: 2px solid white;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 15px;
  animation: pulsando 1500ms infinite ease-in-out;
  margin-top: 20px;
  width: 300px;
  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(27, 62, 74, 1) 0%,
      rgba(85, 141, 158, 1) 100%
    );
    border: 2px solid black;
    color: #f3f3f3;
    animation: none;
  }
`;

export const ListaDePokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const LiPokemon = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  font-size: 2rem;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  padding: 1rem 1.5rem;
  cursor: pointer;
  position: relative;
  width: 70%;
  color: white;
  border: 2px solid transparent;
  filter: grayscale(80%);
  img {
    max-width: 80px;
    max-height: 80px;
  }
  &:hover {
    filter: contrast(200%);
  }
  &.ativo {
    border: 2px solid white;
    filter: contrast(200%);
  }
`;

export const NomePokemon = styled.p`
  font-size: 1rem;
  text-transform: capitalize;
  align-self: flex-start;
`;
export const TipoPokemon = styled.span`
  border: 1px solid white;
  border-radius: 15px;
  font-size: 0.8rem;
  padding: 0.5rem 0.8rem;
  position: absolute;
  top: 60px;
  filter: brightness(1.1);
`;
