import MantelLaptop from "./mantelLaptop";
import MantelMovil from "./mantelMovil";
import MantelTablet from "./mantelTablet";

const Mantel = () => {
  return (
    <div>
      <MantelMovil className="inline text-gray-900 Tablet:hidden" />
      <MantelTablet className="hidden text-gray-900 Tablet:inline Laptop:hidden" />
      <MantelLaptop className="hidden text-gray-900 Laptop:inline" />
      <div className="absolute inset-0 bg-black opacity-40 " />
    </div>
  );
};

export default Mantel;
