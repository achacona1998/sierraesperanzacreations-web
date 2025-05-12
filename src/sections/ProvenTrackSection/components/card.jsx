// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center Laptop:px-10 Laptop:py-16 mr-4 Laptop:text-4xl font-bold bg-gray-900 rounded-md [clip-path:polygon(100%_0,_100%_80%,_50%_100%,_0_80%,_0_0,_50%_20%)]  Tablet:text-3xl Tablet:px-6 Tablet:py-12 text-2xl px-5 py-12">
        {id}
      </div>
      <div className="flex flex-col gap-4 pb-8">
        <h3 className="text-xl font-semibold Laptop:text-3xl Tablet:text-2xl ">
          {title}
        </h3>
        <p className="text-lg Laptop:text-2xl Tablet:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default Card;
