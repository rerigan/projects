import type { LucideIcon } from "lucide-react";

type ChildProps = {
  icon: LucideIcon;
  text: string;
  link:string;
};


const MiniCard = ({text, link, icon: Icon}: ChildProps) => {
  return (
    <a href={link}>
    <div className="bg-[#35ebff] w-40 h-20 flex justify-center flex-col items-center rounded-xl mx-auto  font-bold ">
        <div id="minicardicon" className=""><Icon size={24} /></div>
        <div id="minicardtext" className="block">{text}</div>
    </div></a>
  )
}

export default MiniCard