import Input from '../Input/Input';
import Button from '../Button/Button';

function Forms() {
  return (
    <>
      <Input id="email" label="E-mail" required />
      <Input id="senha" label="Senha" />
      <Button />
    </>
  );
}

export default Forms;
