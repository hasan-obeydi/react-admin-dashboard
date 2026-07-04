import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const SidebarHeader = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="pb-7 pt-3 border-b border-color dark:border-[#D8D8D8]/12 flex justify-between items-center">
      <Link
        onClick={() => setIsMenuOpen(false)}
        to="/"
        className="text-color font-bold text-lg text-center"
      >
        <h1>
          <span className="text-primary">داش</span>
          <span className="dark:text-white">بورد</span>
        </h1>
      </Link>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={clsx(
          isMenuOpen
            ? "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-200"
            : "hidden",
        )}
      >
        <IoClose className="text-2xl" />
      </div>
    </div>
  );
};

export default SidebarHeader;
