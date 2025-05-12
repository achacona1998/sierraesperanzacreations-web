import Opacity from "../components/Mantel/opacity";
import ImgProve from "./../../assets/img/ProvenTrack.avif";
import Texto from "./components/texto";

export default function ProvenTrack() {
  return (
    <section className="relative flex justify-end items-center text-white  bg-ProvenImg  Laptop:h-[640px] Tablet:h-[650px] h-[700px] bg-center  bg-cover">
      <Opacity />
      <Texto />
      <div className="z-10 hidden Laptop:inline">
        <img
          alt="Imagen que representa el producto realizado"
          src={ImgProve}
          className="w-[500px] h-[640px]"
        />
      </div>
    </section>
  );
}
