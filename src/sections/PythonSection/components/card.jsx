// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="flex items-start gap-8 py-4 Tablet:gap-16">
      <div className="relative p-1 px-3 mt-3 text-xl font-bold bg-gray-900 border border-gray-500 rounded-md Tablet:hidden">
        {id}
      </div>
      <div className="relative hidden p-1 px-3 mt-3 mr-4 text-xl font-bold bg-gray-900 border border-gray-500 rounded-md Tablet:inline">
        {id}
        <span className="absolute w-16 h-[2px] bg-gray-400 translate-x-3 translate-y-3" />
        <span className="absolute w-[2px] h-7 bg-gray-400 -translate-x-2 -translate-y-8" />
        <span className="absolute w-[2px] h-[72px] bg-gray-400 -translate-x-2 translate-y-8" />
      </div>
      <div className="flex flex-col gap-1 ">
        <h3 className="text-xl font-semibold Laptop:text-3xl Tablet:text-2xl">
          {title}
        </h3>
        <p className="text-lg Laptop:text-2xl Tablet:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default Card;
