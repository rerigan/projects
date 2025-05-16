import {
  ChevronDown,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const toggleLocalMenu = () => setLocalIsOpen(prev => !prev);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="bg-white shadow-md pb-2 fixed top-0 left-0 w-full z-50">
    <div
      id="navbar"
      className="flex justify-center md:justify-between items-center w-full h-[3.5rem] mx-auto bg-white relative px-4 pt-3"
    >
      {/* Mobile Menu */}
      <div className="navicons md:hidden absolute left-4 "  onClick={toggleMenu}>
        <Menu />
      </div>
       {/* Mobile Menu */}
       <div
        className={`md:hidden absolute transition-all duration-300  overflow-hidden shadow-xl  bg-white top-20 left-5 rounded-xl ${
          isOpen ? "max-h-[600px] outline-1" : "max-h-0 outline-0"
        }`}
      >
        <nav className="flex flex-col gap-5 p-4 text-gray-700 text-xl">
          <a href="#">Home</a>
          <a href="#">Meus eventos</a>
          <a href="#">Buscar eventos</a>
          <a href="#">Conta</a>
        </nav>
      </div>
      <div className="navicons md:hidden absolute right-4 " onClick={toggleLocalMenu}>
        <MapPin />
      </div>
      {/* Menu localização Mobile */}
      <div
        className={`md:hidden absolute transition-all duration-300  overflow-hidden shadow-xl  bg-white right-0 top-20 rounded-xl mx-4 ${
          localIsOpen ? "max-h-[600px] outline-1" : "max-h-0 outline-0"
        }`}
      >
        <nav className="flex flex-col gap-5 p-4 text-gray-700 text-md">
          <a href="#">Localização Atual: Rua das Bananas Verdes, 123</a>
          <a href="#">Mudar localização</a>
        </nav>
      </div>
      {/* VAGAFÁCIL */}
      <div className="flex items-center md:ml-5">
        <img src="./logo.png" width="40px" />
        <h1 className="text-4xl font-normal ml-2">
          <a href="#top"><span className="font-bold">Vaga</span>Fácil</a>
        </h1>
      </div>

      {/* Middle */}
      <div className="middlenav hidden md:flex items-center gap-6 select-none cursor-pointer">
        {/* Div Eventos */}
        <div className="group relative ">
          <span className="navlinks inline-flex">
            Eventos
            <ChevronDown size={20} strokeWidth={1.5} className="mt-1" />
          </span>
          {/* Menu Hover Eventos */}
          <div className="absolute hidden group-hover:flex bg-white border-1 rounded-md shadow-lg z-10 w-[300%] flex-col overflow-hidden ">
          <div className="block hover:bg-gray-100 p-4 ">Meus Eventos</div>
          <div className="block border-t-1 hover:bg-gray-100 p-4">Explorar</div>
        </div>
        </div>
        {/* Div localização */}
        <div className="group relative">
        <span className="navlinks inline-flex">
          <MapPin className="inline mr-1" />
          Localização
          <ChevronDown size={20} strokeWidth={1.5} className="mt-1" />
        </span>
        {/* Menu Hover Localização */}
        <div className="absolute hidden group-hover:flex bg-white border-1 rounded-md shadow-lg z-10 w-[300%] flex-col overflow-hidden">
          <div className="block hover:bg-gray-100 p-4">Localização Atual: Rua das Bananas Verdes, 123</div>
          <div className="block border-t-1 hover:bg-gray-100 p-4">Alterar Localização</div>
        </div>
        </div>
      </div>

      {/* Right */}
      <div className="md:flex items-center gap-1  hidden ">
        <span></span>
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
    </header>
  );
};

export default NavBar;
