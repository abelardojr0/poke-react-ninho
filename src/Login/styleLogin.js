import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
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
  font-weight: bold;
`;

export const BotaoCadastrar = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #008cba;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15px;
  animation: pulsando 1500ms infinite ease-in-out;
  &:disabled {
    background-color: gray;
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
  background-color: #008cba;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15px;
  animation: pulsando 1500ms infinite ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  &:disabled {
    background-color: gray;
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
  img {
    max-width: 80px;
    max-height: 80px;
  }
  &:hover {
    color: black;
    filter: contrast(200%);
  }
  &.ativo {
    color: black;
    border: 2px solid white;
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
