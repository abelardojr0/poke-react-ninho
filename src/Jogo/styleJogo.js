import { Link } from "react-router-dom";
import styled from "styled-components";
import voltar from "../Img/voltar.png";

export const Links = styled(Link)`
  font-size: 3rem;
  color: black;
  text-decoration: none;
  background-color: #ded5e6;
  width: 200px;
  text-align: center;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid black;
  &:hover {
    background-color: #bfabd1;
    color: white;
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
