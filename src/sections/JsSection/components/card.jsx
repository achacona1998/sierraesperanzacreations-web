// eslint-disable-next-line react/prop-types
const Card = ({ icon: Icon, title, content }) => {
  return (
    <div className="z-20 flex flex-col items-start p-6">
      <Icon className="w-12 h-12 mb-4 text-blue-900 Laptop:w-20 Laptop:h-20 Tablet:w-16 Tablet:h-16" />
      <h3 className="mb-4 text-xl font-semibold Laptop:text-3xl Tablet:text-2xl">
        {title}
      </h3>
      <p className="text-lg Laptop:text-2xl Tablet:text-xl text-balance">{content}</p>
    </div>
  );
};

export default Card;
