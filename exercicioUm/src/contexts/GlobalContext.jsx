import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limpaDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, limpaDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
