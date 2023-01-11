import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonsJogador, setPokemonsJogador] = React.useState([]);
  return (
    <GlobalContext.Provider
      value={{
        pokemonsJogador,
        setPokemonsJogador,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
