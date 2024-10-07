import React from 'react';
import Produto from '../Produto/Produto';
import Titulo from '../Titulo/Titulo';

function Products() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo text="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
}

export default Products;
