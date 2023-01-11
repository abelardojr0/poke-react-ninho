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
