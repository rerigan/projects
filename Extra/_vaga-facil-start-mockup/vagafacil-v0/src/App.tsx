import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ConcertImage from './assets/concertimage.png'

function App() {
  return (
    <div className="h-screen flex flex-col">   
     <NavBar/>  
     <HeroSection img={ConcertImage}/>
      <main className="main-content flex-1"></main>
    </div>
  );
}

export default App;
