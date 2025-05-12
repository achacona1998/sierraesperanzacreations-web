import { Resources } from "../constants/items";

export const RecursosCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold ">Resources</h3>
      <ul className="flex flex-col gap-2">
        {Resources.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}{" "}
      </ul>
    </div>
  );
};
