const Passos = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row justify-between   mb-20 mt-10">
     
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center">1</div>
        <h2 className="font-bold w-[300px] text-center mt-2">Busque seu evento</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center">2</div>
        <h2 className="font-bold w-[300px] text-center mt-2">Encontre as 
        vagas disponíveis</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center">3</div>
        <h2 className="font-bold w-[300px] text-center mt-2">Reserve sua vaga</h2>
      </div>
      <div className="items-center flex flex-col  min-w-[100px]">
        <div className="bg-[#35ebff] border-2 w-10 h-10 rounded-full flex items-center justify-center ">4</div>
        <h2 className="font-bold w-[300px] text-center mt-2">Estacione com segurança 
        e aproveite o evento!</h2>
      </div>
    </div>
  );
};

export default Passos;
