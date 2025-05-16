const Footer = () => {
  return (
    <footer className="footer mt-10 pb-10 md:pb-20">
      <div className="flex justify-between  mb-10  md:mx-40 flex-col md:flex-row text-center md:text-left">
        <div className="flex flex-col max-w-80 mx-auto md:mx-0 items-center md:items-baseline">
            <div className=" max-w-40">
            <a href="">
          <img src="./alemarlogo.png"></img></a></div>
          
        <div className="mt-2">Sua plataforma para compra de
        ingressos para os melhores eventos.</div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Links Rápidos</h2>
          <a href=""><h3>Início</h3></a>
          <a href=""><h3>Eventos</h3></a>
          <a href=""><h3>Sobre</h3></a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Suporte</h2>
          <a href=""><h3>FAQ</h3></a>
          <a href=""><h3>Termos de Uso</h3></a>
          <a href=""><h3>Política de Privacidade</h3></a>
          <a href=""><h3>Política de Reembolso</h3></a>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Contato</h2>
          <a href=""><h3>contato@alemar.com</h3></a>
          <a href=""><h3>+55 (43) 99999-9999</h3></a>
          <a href=""><h3>ìcones ícones</h3></a>
        </div>
      </div>
      <div className="flex justify-between md:mx-40 flex-col md:flex-row gap-4 text-sm items-center border-t-1 border-gray-300 pt-4">
        <h3>@2025 Alemar - Todos os direitos reservados.</h3>
        <h3>Desenvolvido com ❤️ por Alemar Team</h3>
      </div>
    </footer>
  );
};

export default Footer;
