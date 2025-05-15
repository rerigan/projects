import Categorias from "./Categorias";

interface Props {
  img?: string;
}

const HeroSection = ({img}: Props) => {
  return <div className="max-w-[97%] mx-auto"><div className="herosection w-full mx-auto mt-20 mb-20 flex items-center">
    <div className="flex flex-col md:flex-row w-full gap-8">
      {/* Div texto */}
      <div className="flex flex-col justify-center px-4 md:px-16 flex-1">
        <h1 className="text-4xl md:text-6xl lg:text-6xl mb-4 md:mb-6">Encontre <span className="font-bold">vagas</span> nos <span className="font-bold">principais eventos!</span></h1>
        <input type="text" className="border-1 rounded p-2" placeholder="Busque por Evento, Artista, Local..."></input>
      </div>
      {/* Div imagem */}
      <div className="flex-1 flex items-center justify-center">
        {img && <img src={img} alt="Ilustração de estacionamento" className="w-full max-w-[600px] h-auto" />}
      </div>
    </div>
  </div>
  <Categorias />
</div>
};

export default HeroSection;
