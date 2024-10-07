import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Produto from './components/Produto/Produto';
// import './style.css';

function App() {
  const { pathname } = window.location;
  // const produtos = [
  // let Component;
  // if (pathname === '/produtos') {
  //   Component = Produtos;
  // } else {
  //   Component = Home;
  // }

  console.log(pathname);

  return (
    <section>
      <Header />
      {/* <Component /> */}
      {pathname === '/produtos' ? <Products /> : <Home />}
    </section>
  );
}

export default App;
