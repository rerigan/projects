import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ConcertImage from './assets/concertimage.png'
import Section2 from "./components/Section2";

function App() {
  return (
    <div className="h-screen flex flex-col ">   
     <NavBar/>  
      <main className="main-content flex-1">
      <HeroSection img={ConcertImage}/>
      <Section2 />
      </main>
    </div>
  );
}

export default App;
