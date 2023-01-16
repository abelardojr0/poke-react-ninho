import styled from "styled-components";

export const TituloLista = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 60px;
`;
export const ListaPokemonsJogador = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 10px;
`;

export const ListaPokemonsInimigo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  &.primeiro {
    li:nth-child(1) {
      border: 2px solid white;
      color: white;
    }
  }
  &.segundo {
    li:nth-child(2) {
      border: 2px solid white;
      color: white;
    }
  }
  &.terceiro {
    li:nth-child(3) {
      border: 2px solid white;
      color: white;
    }
  }
`;
export const LiLista = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 10px;
  font-size: 2rem;
  width: 300px;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
  }
  &:hover {
    color: white;
    filter: brightness(1.1);
  }
  &.ativo {
    border: 2px solid #da70d6;
    color: #da70d6;
  }
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
export const BotaoVoltar = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
`;
