import { Link } from "react-router";

const LastProductCard = ({ title, price, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 border border-color p-4 rounded-lg dark:border-gray-700 transition-transform duration-300 hover:scale-103 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]">
      <div className="w-full sm:w-24 rounded-lg overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src="images/product-image.jpg"
          alt={title}
        />
      </div>
      <div className="flex-1">
        <span className="font-bold text">{title}</span>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
          <p className="font-bold text-lg">
            <span className="text-lg">
              {Number(price).toLocaleString("fa-IR")}
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              {" "}
              تومان
            </span>
          </p>
          <Link
            to="/products"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 text-xs"
          >
            ویرایش محصول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastProductCard;
