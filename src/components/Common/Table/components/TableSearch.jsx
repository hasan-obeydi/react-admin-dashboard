import { FaSearch } from "react-icons/fa";

const TableSearch = ({ header, setCurrentPage }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer border border-color dark:border-gray-700 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 hover:shadow-sm focus-within:ring-4 focus-within:ring-blue-500/30 focus-within:ring-opacity-50">
      <FaSearch className="text-lg text-gray-500 dark:text-gray-300" />
      <input
        type="text"
        placeholder="جستجو کنید ..."
        value={header.item}
        onChange={(e) => {
          header.setItem && header.setItem(e.target.value);
          setCurrentPage && setCurrentPage(1);
        }}
        className="bg-transparent border-none focus:outline-none placeholder:text-gray-400  text-sm w-full"
      />
    </div>
  );
};

export default TableSearch;
