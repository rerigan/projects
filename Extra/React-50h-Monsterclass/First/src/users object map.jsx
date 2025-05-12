import ProductInfo from "./components/ProductInfo";

const App = () => {
  const users = [
    {nome: 'Guilherme', idade: 24, trabalho:'Garçom'},
    {nome: 'Josias', idade: 24, trabalho:'Pica Fina'},
    {nome: 'Matolomeu', idade: 24, trabalho:'Garçom'},
    {nome: 'Gigaboy', idade: 24, trabalho:'Garçom'}
  ]

  return (
    <div>
      {users.map(({nome,idade,trabalho}) => (
        <ul key={nome}>
          <li >{nome}</li>
          <li >{idade}</li>
          <li >{trabalho}</li>
        </ul>
      ))} 
      <ProductInfo />
    </div>
  );
};

