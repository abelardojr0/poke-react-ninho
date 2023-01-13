import styled from "styled-components";

export const ListaPokemonsJogador = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
`;
export const LiLista = styled.li`
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
