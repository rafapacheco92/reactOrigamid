import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function Produto() {
  const { produto } = useContext(GlobalContext);
  if (produto === null) return null;
  return (
    <div>
      Produto:{' '}
      {produto.map((p) => (
        <li key={p.id}>{p.nome}</li>
      ))}
    </div>
  );
}

export default Produto;
