import { Beams } from "./components/Beams";
import Boton from "./components/boton";
import HeroLogoH from "./components/HeroLogoH";
import HeroLogoV from "./components/HeroLogoV";
import Texto from "./components/texto";

export default function Hero() {
  return (
    <header className="relative flex flex-col items-center h-screen py-16 text-white bg-cover Laptop:bg-center justify-evenly bg-HeroImg ">
      <Beams />
      <div className="absolute inset-0 bg-black opacity-80" />
      <div className="z-20 flex items-center justify-center px-4 mb-10">
        <HeroLogoH className="hidden w-[800px] h-auto Laptop:inline " />
        <HeroLogoV className="inline w-[200px] Tablet:w-[350px] h-auto Laptop:hidden " />
      </div>

      <Texto />

      <div className="z-20 flex items-center justify-center w-full gap-4 px-8 Tablet:gap-20">
        <Boton name="Our Services" section="Services" />
        <Boton name="Contact Us" section="Contact" />
      </div>
    </header>
  );
}
