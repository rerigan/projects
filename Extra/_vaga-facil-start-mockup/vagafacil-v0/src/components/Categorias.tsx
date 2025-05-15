import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import MiniCard from "./MiniCard"


const Categorias = () => {
  return (
    <div className="p-5 md:pl-15">
      <div className="text-center md:text-left mb-5">
        <h2 className="font-bold md:text-3xl mb-2">Categorias</h2>
        <h2 className="md:text-xl">Encontre o evento em que deseja estacionar</h2>
      </div>
      {/* Carrossel */}
      <div id="carrossel" className="flex items-center overflow-x-hidden relative">
        <CircleArrowLeft size={30} strokeWidth={1.5} className="inline-flex cursor-pointer z-10 min-w-[30px]"/>
        <div className="flex transition-transform duration-300 mx-auto">
          <div className="flex gap-4">
            <div className="min-w-[160px] sm:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden sm:block md:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden md:block lg:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden lg:block xl:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden xl:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden xl:block">
              <MiniCard />
            </div>
            <div className="min-w-[160px] hidden xl:block">
              <MiniCard />
            </div>
          </div>
        </div>
        <CircleArrowRight size={30} strokeWidth={1.5} className=" cursor-pointer z-10 min-w-[30px]"/>
      </div>
    </div>
  )
}

export default Categorias