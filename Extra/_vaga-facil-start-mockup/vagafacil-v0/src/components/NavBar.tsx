interface NavBarProps {
  img?: string;
  alt?: string;
  width?:string;
  text?:string;
}

const NavBar = ({ img, alt, text, width }: NavBarProps) => {
  return (
    <div className="flex mt-20 justify-center w-full max-w-md mx-auto">
      <img src={img} alt={alt} width={width}/>
      <h1 className="text-4xl font-bold text-center">{text}</h1>
    </div>
  );
};

export default NavBar;
