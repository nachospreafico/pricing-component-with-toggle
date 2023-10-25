const ProductCard = ({
  price,
  title,
  feature1,
  feature2,
  feature3,
  selected,
  handleSelection,
}) => {
  return (
    <div
      className={`${
        selected ? "bg-violet-600 scale-110" : "bg-white"
      } w-full max-w-[325px] md:max-w-[375px] lg:max-w-[450px] m-auto duration-300 p-6 rounded-md md:w-full shadow-lg`}
    >
      <div
        className="flex flex-col border-b pb-8 group cursor-pointer "
        onClick={handleSelection}
      >
        <h2
          className={`  text-center font-bold ${
            selected ? "text-white" : "text-gray-600"
          }`}
        >
          {title}
        </h2>
        <p
          className={`font-bold text-center text-5xl md:text-4xl lg:text-5xl ${
            selected ? "text-white" : "text-gray-700"
          }`}
        >
          ${price}
        </p>
      </div>
      <div className="border-b p-4 flex justify-center items-center">
        <p
          className={`text-center font-bold ${
            selected ? "text-white" : "text-gray-600"
          }`}
        >
          {feature1}
        </p>
      </div>
      <div className="border-b p-4 flex justify-center items-center">
        <p
          className={`text-center font-bold ${
            selected ? "text-white" : "text-gray-600"
          }`}
        >
          {feature2}
        </p>
      </div>
      <div className="border-b p-4 flex justify-center items-center mb-8">
        <p
          className={`text-center font-bold ${
            selected ? "text-white" : "text-gray-600"
          }`}
        >
          {feature3}
        </p>
      </div>

      <button
        className={`w-full  duration-200 border-2 border-transparent py-2 rounded-md   cursor-pointer ${
          selected
            ? "md:hover:text-white text-violet-600  md:hover:bg-violet-600 md:hover:border-white bg-white"
            : "md:hover:text-violet-600 text-white md:hover:bg-white md:hover:border-violet-600 bg-violet-600"
        } `}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default ProductCard;
