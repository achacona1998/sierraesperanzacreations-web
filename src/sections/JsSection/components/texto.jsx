import { Items } from "../constant/Items";
import Card from "./card";

const Texto = () => {
  return (
    <div className="flex flex-col items-start h-full gap-12 justify-evenly">
      <h2 className="z-20 text-2xl font-bold Laptop:text-5xl Tablet:text-4xl">
        JavaScript: Unleashing Interactive Experiences
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Items.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Texto;
