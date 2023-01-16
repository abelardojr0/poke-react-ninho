import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: black;
`;
export const Subtitulo = styled.h2`
  font-size: 2rem;
  color: black;
`;

export const FormularioLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Nome = styled.label`
  font-size: 2rem;
  color: black;
`;

export const NomeInput = styled.input`
  outline: none;
  background-color: transparent;
  border: 2px solid black;
  padding: 1rem;
  font-size: 1rem;
`;

export const BotaoCadastrar = styled.button`
  background-color: red;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  &:disabled {
    background-color: gray;
  }
`;

export const BotaoResetar = styled.button`
  background-color: green;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
`;

export const ListaDePokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;

export const LiPokemon = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  img {
    max-width: 80px;
    max-height: 80px;
  }
  &:hover {
    border: 2px solid white;
    color: white;
  }
  &.ativo {
    border: 2px solid white;
    color: white;
  }
`;
