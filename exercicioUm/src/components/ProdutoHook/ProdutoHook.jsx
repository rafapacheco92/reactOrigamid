import React from 'react';

function ProdutoHook({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>Preço: R${dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
}

export default ProdutoHook;
