{
  id: 1,
  nome: 'Smartphone',
  preco: 'R$ 2000',
  cores: ['#29d8d5', '#252a34', '#fc3766'],
},
{
  id: 2,
  nome: 'Notebook',
  preco: 'R$ 3000',
  cores: ['#ffd045', '#d4394b', '#f37c59'],
},
{
  id: 3,
  nome: 'Tablet',
  preco: 'R$ 1500',
  cores: ['#365069', '#47c1c8', '#f95786'],
},
];

const dados = produtos.filter(
({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
);
console.log(dados);

//----------------------------------------------------------------

<div>
  <section>
    {dados.map(({ id, nome, preco, cores }) => (
      <div key={id}>
        <h1>{nome}</h1>
        <p>Preço: {preco}</p>
        <ul>
          {cores.map((c) => (
            <li style={{ color: 'white', backgroundColor: c }}>{c}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  <section>
    <Forms />
  </section>
</div>;


const { pathname } = window.location;


  console.log(pathname);

  return (
    <section>
      <Header />
      {/* <Component /> */}
      {pathname === '/produtos' ? <Products /> : <Home />}
    </section>
  );

  //----------------------------------------------------------------

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>carregando...</p>}
      {!carregando && dados && <ProdutoHook dados={dados} />}

//----------------------------------------------------------------

const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }


  <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick} style={{ margin: '0.5rem' }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: '0.5rem' }}>
        smartphone
      </button>
    </div>