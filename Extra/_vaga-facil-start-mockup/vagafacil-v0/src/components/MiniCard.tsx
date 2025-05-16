interface MiniCardProps {
    text?:string;
}


const MiniCard = ({text}:MiniCardProps) => {
  return (
    <div className="bg-[#35ebff] w-40 h-20 text-center items-center block rounded-xl mx-auto md:mx-4 font-bold ">
        <div id="minicardicon" className="block pt-2 ">Icone</div>
        <div id="minicardtext" className="block">{text}</div>
    </div>
  )
}

export default MiniCard