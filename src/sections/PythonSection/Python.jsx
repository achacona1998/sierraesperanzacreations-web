import Opacity from "../components/Mantel/opacity";
import ImgPy from "./../../../src/assets/img/Python.avif";
import Texto from "./components/texto";

export default function Python() {
  return (
    <section className="relative flex justify-end text-white  bg-PythonImg  Laptop:h-[600px] Tablet:h-[600px] h-[700px] bg-center  bg-cover">
      <Opacity />
      <Texto />
      <div className="z-10 hidden Laptop:inline">
        <img
          src={ImgPy}
          alt="Server visualization"
          className=" w-[500px] h-[600px]"
        />
      </div>
    </section>
  );
}
