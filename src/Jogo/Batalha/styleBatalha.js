import styled from "styled-components";

export const TextoEscolha = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 40px;
`;
export const ListaPokemonsJogador = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
  gap: 10px;
`;

export const ListaPokemonsInimigo = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
`;

export const LiListaInimigo = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  img {
    width: 100px;
    height: 100px;
  }
  &.ativo {
    border: 2px solid white;
    color: white;
  }
`;
