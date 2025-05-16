const Passos = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row justify-between   mb-20 mt-10 relative">
      <div className="outline-1 outline-gray-400 absolute w-[80%] left-[10%] md:flex top-5 -z-10 hidden "></div>
     
     
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center">1</div>
        <h2 className="font-bold w-[300px] text-center mt-2 bg-white">Busque seu evento</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center">2</div>
        <h2 className="font-bold w-[300px] text-center mt-2 bg-white">Encontre as 
        vagas disponíveis</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center ">3</div>
        <h2 className="font-bold w-[300px] text-center mt-2 bg-white">Reserve sua vaga</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center ">4</div>
        <h2 className="font-bold w-[300px] text-center mt-2 bg-white">Estacione com segurança 
        e aproveite o evento!</h2>
      </div>
      
    </div>
  );
};

export default Passos;
