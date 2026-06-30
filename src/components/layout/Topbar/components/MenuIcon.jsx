import { FiMenu } from "react-icons/fi";

const MenuIcon = ({ toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className="sm:hidden cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-200"
    >
      <FiMenu className="text-2xl" />
    </div>
  );
};

export default MenuIcon;
