// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="">
      <h3 className="mb-4 text-xl font-semibold Laptop:text-3xl Tablet:text-2xl">
        {title}
      </h3>
      <p className="text-lg Laptop:text-2xl Tablet:text-xl">{content}</p>
    </div>
  );
};

export default Card;
