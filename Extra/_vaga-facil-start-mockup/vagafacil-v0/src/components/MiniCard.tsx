// interface MiniCardProps {
//     icon?:string;
//     text?:string;
// }


const MiniCard = () => {
  return (
    <div className="bg-[#35ebff] w-40 h-20 text-center items-center block rounded-xl mx-auto md:mx-4 font-bold ">
        <div id="minicardicon" className="block pt-2 ">Icone</div>
        <div id="minicardtext" className="block">Festas e Shows</div>
    </div>
  )
}

export default MiniCard