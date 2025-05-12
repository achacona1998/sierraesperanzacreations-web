import { Items } from "../constant/items";
import Card from "./card";

const Texto = () => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-start h-full gap-12 px-10 py-16 text-white justify-evenly">
      <h2 className="text-2xl font-bold Laptop:text-5xl Tablet:text-4xl">
        React/Redux: Crafting Dynamic User Interfaces
      </h2>
      <div className="grid grid-cols-1 gap-8 Laptop:grid-cols-3 ">
        {Items.map((item) => (
          <Card key={item.id} title={item.title} content={item.content} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Texto;
