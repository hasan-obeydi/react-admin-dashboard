import { Link } from "react-router";

const LastProductCard = ({ title, price, description }) => {
  return (
    <Link
      to="/products"
      className="flex flex-col sm:flex-row items-center gap-4 border border-color p-4 rounded-lg dark:border-gray-700 transition-transform duration-300 hover:scale-103"
    >
      <div className="w-full sm:w-24 rounded-lg overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src="images/product-image.jpg"
          alt={title}
        />
      </div>
      <div>
        <span className="font-bold text">{title}</span>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        <p className="font-bold text-lg mt-4">
          <span className="text-lg">{price.toLocaleString()}</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            {" "}
            تومان
          </span>
        </p>
      </div>
    </Link>
  );
};

export default LastProductCard;
