import styled, { createGlobalStyle } from "styled-components";
import bg from "./Img/bg2.jpg";
import bg_menu from "./Img/bg-menu.png";
import bg_lista from "./Img/bg1.jpg";
import voltar from "./Img/voltar.png";

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    background-color: #2F4F4F;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Container = styled.section`
  margin-top: 20px;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.4);
  /* background-image: url(${bg_menu}); */
`;

export const ContainerMenu = styled.section`
  margin-top: 20px;
  background-color: transparent;
  min-width: 650px;
  min-height: 60vh;
  border-radius: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 2rem;
  position: relative;
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.4);
  background-image: url(${bg_menu});
  background-position: top;
  background-size: cover;
`;

export const ContainerLista = styled.section`
  margin-top: 20px;
  background-color: transparent;
  min-width: 400px;
  min-height: 80vh;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 2rem;
  position: relative;
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.4);
  background-image: url(${bg_lista});
  background-position: center;
  background-size: cover;
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
export const BotaoSair = styled.button`
  width: 80px;
  height: 80px;
  background-image: url(${voltar});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
  }
`;

export const NickName = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  background-color: black;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 15px;
`;
