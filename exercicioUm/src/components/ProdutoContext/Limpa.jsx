import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

function Limpa() {
  const { limpaDados } = useContext(GlobalContext);
  return <button onClick={limpaDados}>Limpar</button>;
}

export default Limpa;
