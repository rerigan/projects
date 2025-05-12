import UsersInfo from "./App copy";
import ProductInfo from "./components/ProductInfo";


const App = () => {
  const users = [
    {id: 1, nome: 'Guilherme', idade: 24, trabalho:'Garçom'},
    {id: 1,nome: 'Josias', idade: 24, trabalho:'Pica Fina'},
    {id: 1,nome: 'Matolomeu', idade: 24, trabalho:'Garçom'},
    {id: 1,nome: 'Gigaboy', idade: 24, trabalho:'Garçom'}
  ]

  return (
    <div>
      {users.map(({nome,idade,trabalho, id}) => (
        <ul>
          <li key={id}>{nome}</li>
          <li key={id}>{idade}</li>
          <li key={id}>{trabalho}</li>
        </ul>
      ))} 
      <ProductInfo />
      <UsersInfo />
    </div>
  );
};

export default App;
