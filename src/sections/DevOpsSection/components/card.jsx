// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="z-20 flex items-start py-4">
      <div className="relative p-1 px-3 mt-4 mr-4 text-xl font-bold bg-gray-900 border border-gray-300 rounded-md ">
        {id}
      </div>
      <div className="flex flex-col gap-1 ">
        <h3 className="text-xl font-semibold Laptop:text-3xl Tablet:text-2xl ">
          {title}
        </h3>
        <p className="text-lg Laptop:text-2xl Tablet:text-xl text-balance">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
