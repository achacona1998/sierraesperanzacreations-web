import { CanvasAnimation } from "./components/canvas";
import { PieDePagina } from "./components/pieDePagina";
import { ServiciosCard } from "./components/servicios";
import { RecursosCard } from "./components/recursos";
import { ContactoCard } from "./components/contacto";
import { RedesCard } from "./components/redes";

const Contact = () => {
  return (
    <footer
      id="Contact"
      className="relative overflow-hidden text-white bg-gray-950">
      <CanvasAnimation />
      <div className="absolute inset-0 bg-black opacity-60 " />
      <div className="relative z-10 pt-10 ">
        <div className="grid justify-center gap-10 px-10 grid-1 Tablet:grid-cols-2 Laptop:grid-cols-4 ">
          {/* Redes */}
          <RedesCard />
          {/* Servicios */}
          <ServiciosCard />
          {/* Recursos */}
          <RecursosCard />
          {/* Contacto */}
          <ContactoCard />
        </div>
        <PieDePagina />
      </div>
    </footer>
  );
};

export default Contact;
