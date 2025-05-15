import {
  ChevronDown,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div
      id="navbar"
      className="flex justify-center md:justify-between items-center w-full h-[3.5rem] mx-auto bg-white relative px-4 pt-3"
    >
      {/* Mobile Menu */}
      <div className="navicons md:hidden absolute left-4 ">
        <Menu />
      </div>
      {/* Left */}
      <div className="flex items-center md:ml-5">
        <img src="./logo.png" width="40px" />
        <h1 className="text-4xl font-normal ml-2">
          <span className="font-bold">Vaga</span>Fácil
        </h1>
      </div>

      {/* Middle */}
      <div className="middlenav hidden md:flex items-center gap-6">
        <span className="navlinks inline-flex">Eventos<ChevronDown size={20} strokeWidth={1.5} className="mt-1"/></span>
        <span className="navlinks inline-flex">
          <MapPin className="inline mr-1" />
          Localização
          <ChevronDown size={20} strokeWidth={1.5}  className="mt-1"/>
        </span>
      </div>

      {/* Right */}
      <div className="md:flex items-center gap-1  hidden ">
        <span>
     
        </span>
        <span className="navicons" id="botãobusca">
          <Search />
        </span>
        <span className="navicons">
          <ShoppingCart />
        </span>
        <span className="navicons">
          <User />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
