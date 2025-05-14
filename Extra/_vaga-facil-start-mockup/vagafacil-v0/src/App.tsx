import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="bg-[#1d1d1d] h-screen flex flex-col">
      <NavBar text="oi, tudo bem?"/>
     
      <main className="main-content flex-1"></main>
    </div>
  );
}

export default App;
