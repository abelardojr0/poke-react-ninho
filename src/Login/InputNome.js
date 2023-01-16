import React from "react";
import { NomeInput } from "./styleLogin";

const InputNome = ({ tipo, nome, id }) => {
  return <NomeInput type={tipo} name={nome} id={id} />;
};
export default InputNome;
