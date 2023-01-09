import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Container = styled.section`
  background-color: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
`;
export const Subtitulo = styled.h2`
  font-size: 2rem;
  color: white;
`;

export const FormularioLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Nome = styled.label`
  font-size: 2rem;
  color: white;
`;

export const NomeInput = styled.input`
  outline: none;
  background-color: transparent;
  border: 2px solid white;
  padding: 1rem;
  font-size: 1rem;
`;

export const BotaoCadastrar = styled.button`
  background-color: red;
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
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    max-width: 100px;
  }
`;
