import { useEffect, useState } from 'react';
import './style.css';
import Limpa from './components/ProdutoContext/Limpa';
import Produto from './components/ProdutoContext/Produto';
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';

function App() {
  return (
    <GlobalContextProvider>
      <Produto />
      <Limpa />
    </GlobalContextProvider>
  );
}

export default App;
