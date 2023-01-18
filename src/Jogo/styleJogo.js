import { Link } from "react-router-dom";
import styled from "styled-components";

export const Links = styled(Link)`
  font-size: 2rem;
  color: black;
  text-decoration: none;
  background-color: #fffaf2;
  width: 200px;
  text-align: center;
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid black;
  &:hover {
    background-color: #cb1312;
    color: white;
  }
`;
