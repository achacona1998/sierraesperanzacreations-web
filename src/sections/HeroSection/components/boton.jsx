import { Link as ScrollLink } from "react-scroll";

// eslint-disable-next-line react/prop-types
const Boton = ({ name, section }) => {
  return (
    <ScrollLink
      smooth={true}
      to={section}
      className="  font-semibold text-white transition-all duration-300 border-2 rounded-md cursor-pointer bg-gray-950 border-gray-950   Laptop:text-xl active:scale-90 relative inline-flex h-12  transistion overflow-hidden  p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
      <span className="inline-flex items-center justify-center w-full h-full gap-2 text-sm font-medium text-white rounded-md cursor-pointer bg-gray-950 px-7 backdrop-blur-3xl undefined">
        {name}
      </span>
    </ScrollLink>
  );
};

export default Boton;
