import styled from "styled-components";

export const TituloLista = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 20px;
`;

export const ListaPokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
  min-height: 50vh;
  gap: 10px;
`;
