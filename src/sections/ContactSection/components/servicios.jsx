import { OurServices } from "../constants/items";

export const ServiciosCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Our Services</h3>
      <ul className="flex flex-col gap-2">
        {OurServices.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}{" "}
      </ul>
    </div>
  );
};
