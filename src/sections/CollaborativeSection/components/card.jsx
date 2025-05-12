// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="flex items-center ">
      <div>
        <details open>
          <summary className="mb-4 text-xl font-semibold cursor-pointer Laptop:text-3xl Tablet:text-2xl">
            {title}
          </summary>
          <p className="p-2 pl-5 ml-2 text-lg border-l border-gray-400 Laptop:text-2xl Tablet:text-xl ">
            {content}
          </p>
        </details>
      </div>
    </div>
  );
};

export default Card;
