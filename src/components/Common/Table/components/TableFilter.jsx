import { FaFilter } from "react-icons/fa";

const TableFilter = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer border border-color dark:border-gray-700 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 hover:shadow-sm">
      <FaFilter className="text-lg text-gray-500 dark:text-gray-300" />
      <span className="text-gray-500 dark:text-gray-300">فیلتر</span>
    </div>
  );
};

export default TableFilter;
