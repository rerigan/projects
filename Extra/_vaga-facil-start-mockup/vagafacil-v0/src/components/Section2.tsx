import Card from "./Card"
import Passos from "./Passos"

const Section2 = () => {
  return (
    <div className=" mt-5 mx-20">
        <div><Passos /></div>
        <div>
<h2 className="font-bold md:text-4xl md:text-left text-center text-2xl mb-6">Estacionamentos em destaque</h2>
{/* Grid de cards estacionamentos */}
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
        </div>
    </div>
  )
}

export default Section2