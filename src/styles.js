import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    height: 100vh;
    background-color: #2F4F4F;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.section`
  background-color: #d8bfd8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
`;
