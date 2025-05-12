import { Items } from "../constant/Items";
import Card from "./card";

const Texto = () => {
  return (
    <div className=" Laptop:w-[900px] px-10 py-5 absolute inset-0 z-20 Desktop:w-[1200px] Desktop:py-14 ">
      <h2 className="mb-8 text-2xl font-bold Laptop:text-5xl Tablet:text-4xl ">
        Proven Track Record of Success
      </h2>
      <div className="">
        {Items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default Texto;
