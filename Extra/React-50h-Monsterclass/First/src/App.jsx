import ProductInfo from "./components/ProductInfo";

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => (
        <ul key={Math.random()}>
          <li>{number}</li>
        </ul>
      ))}
      <ProductInfo />
    </div>
  );
};

export default App;
