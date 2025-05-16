import { CalendarDays, CircleDollarSign, MapPin } from "lucide-react"

const Card = () => {
  return (
    <div className="border-1 border-gray-400 rounded-xl overflow-hidden w-[300px] select-none">
        {/* Imagem */}
        <div>
            <img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=478&txt_altura=369&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10" width="300"></img>
        </div>
        {/* Título */}
        <div>
<h2 className="font-bold mt-2 mb-4 text-lg ml-4">Rock Legends Festival</h2>
        </div>
        {/* Info (data,local,preço) */}
        <div className="text-sm ml-4 flex-col flex">
               <div className="inline-flex items-center">
<CalendarDays size={15} className="mr-1"/><h3>15/03/2025</h3>
</div>
<div className="inline-flex items-center">
<MapPin size={15} className="mr-1"/><h3>Arena São Paulo</h3></div>
<div className="inline-flex items-center">
<CircleDollarSign size={15} className="mr-1"/><h3>A partir de R$99,90</h3></div>
        </div>
        {/* Ver detalhes */}
        <div className="text-center mt-8 text-sm underline mb-1 ">
<h3 className="cursor-pointer">Ver detalhes</h3>
        </div>
    </div>
  )
}

export default Card