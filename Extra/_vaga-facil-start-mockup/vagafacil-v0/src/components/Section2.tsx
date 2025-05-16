import { CalendarDays, ChevronDown, MapPin, Navigation } from "lucide-react";
import Card from "./Card";
import Passos from "./Passos";

const Section2 = () => {
  return (
    <div className=" mt-5 mx-7 md:mx-20">
      <div>
        <Passos />
      </div>
      <div>
        <h2 className="font-bold md:text-4xl md:text-left text-center text-2xl mb-6">
          Estacionamentos em destaque
        </h2>
        {/* Grid de cards estacionamentos */}
        <div className="flex flex-col md:flex-row gap-7 items-center mb-20">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* Div de datas de eventos */}
      <div className="">
        <div>
          <h2 className="font-bold md:text-4xl md:text-left text-center text-2xl mb-2 whitespace-nowrap">
            Datas de eventos
          </h2>
          <div
            id="filtros"
            className="md:inline-flex gap-4 mb-4 mx-17 md:mx-0 items-center  select-none text-center flex overflow-x-auto scroll-smooth no-scrollbar  whitespace-nowrap "
          >
            <h3 className="bg-[#35ebff] p-2 px-3 rounded-full text-sm inline-flex md:w-auto cursor-pointer hover:bg-[#60c9d4] transition-all  mb-2 md:mb-0">
              <Navigation size={20} className="mr-2  min-w-4" />
              Usar minha localização
            </h3>
            <h3 className="bg-[#dbdbdb] p-2 px-3 rounded-full text-sm inline-flex  cursor-pointer hover:bg-[#b3b3b3] transition-all mb-2 md:mb-0">
              <MapPin size={20} className="mr-2  min-w-4" />
              Qualquer lugar
              <ChevronDown size={20} className="min-w-4"/>
            </h3>
            <h3 className="bg-[#dbdbdb] p-2 px-3 rounded-full text-sm inline-flex  cursor-pointer hover:bg-[#b3b3b3] transition-all mb-2 md:mb-0">
              <CalendarDays size={20} className="mr-2  min-w-4" />
              Qualquer data
              <ChevronDown size={20} className="min-w-4" />
            </h3>
          </div>
        </div>
        {/* Cards de datas */}
        <div className="flex flex-col md:flex-row gap-7 items-center mb-20">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Section2;
