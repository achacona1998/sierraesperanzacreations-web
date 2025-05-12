import Opacity from "../components/Mantel/opacity";
import ImgColl from "./../../assets/img/Collaborative.avif";
import Texto from "./components/texto";

export default function Collaborative() {
  return (
    <section className="relative flex justify-end items-center text-white  bg-CollaborativeImg  Laptop:h-[708px] Tablet:h-[650px] h-[850px] bg-center  bg-cover">
      <Opacity />
      <Texto />
      <div className="z-10 hidden Laptop:inline">
        <img
          alt="Imagen que representa la colaboracion"
          src={ImgColl}
          className="aspect-auto h-[708px]"
        />
      </div>
    </section>
  );
}
