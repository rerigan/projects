import { useRef, useState } from "react"
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import MiniCard from "./MiniCard"

const Categorias = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)
  const scrollAmount = 200 // quanto você quer mover por clique

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const newScroll = direction === "left" ? scrollX - scrollAmount : scrollX + scrollAmount

    // Limitar rolagem para não ultrapassar os limites
    const maxScroll = container.scrollWidth - container.clientWidth
    const clampedScroll = Math.max(0, Math.min(newScroll, maxScroll))

    setScrollX(clampedScroll)
    container.scrollTo({
      left: clampedScroll,
      behavior: "smooth"
    })
  }

  return (
    <div className="p-5 md:pl-15">
      <div className="text-center md:text-left mb-5">
        <h2 className="font-bold md:text-3xl mb-2">Categorias</h2>
        <h2 className="md:text-xl">Encontre o evento em que deseja estacionar</h2>
      </div>

      {/* Carrossel */}
      <div className="flex items-center relative">
        <CircleArrowLeft
          size={30}
          strokeWidth={1.5}
          className="cursor-pointer z-10 min-w-[30px]"
          onClick={() => handleScroll("left")}
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar mx-4"
        >
          <div className="flex gap-4">
            <div className="min-w-[180px]">
              <MiniCard text="Festas e Shows" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard text="Stand-up Comedy" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard text="Teatro e Cinema" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard text="Esportes" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard text="Gastronomia" />
            </div>
            <div className="min-w-[160px]">
              <MiniCard text="Workshops" />
            </div>
          </div>
        </div>

        <CircleArrowRight
          size={30}
          strokeWidth={1.5}
          className="cursor-pointer z-10 min-w-[30px]"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  )
}

export default Categorias
