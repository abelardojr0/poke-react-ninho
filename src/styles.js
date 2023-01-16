import styled, { createGlobalStyle } from "styled-components";
import bg from "./Img/bg4.jpg";
import bg_menu from "./Img/bg-menu.jpg";
import bg_lista from "./Img/bg-lista.jpg";

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
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.8);
  /* background-image: url(${bg_menu}); */
`;

export const ContainerMenu = styled.section`
  margin-top: 20px;
  background-color: transparent;
  min-width: 400px;
  min-height: 400px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 2rem;
  position: relative;
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.8);
  background-image: url(${bg_menu});
  background-position: top;
  background-size: cover;
`;

export const ContainerLista = styled.section`
  margin-top: 20px;
  background-color: transparent;
  min-width: 400px;
  min-height: 400px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 2rem;
  position: relative;
  box-shadow: 5px 5px 10px 20px rgba(0, 0, 0, 0.8);
  background-image: url(${bg_lista});
  background-position: center;
  background-size: cover;
`;
