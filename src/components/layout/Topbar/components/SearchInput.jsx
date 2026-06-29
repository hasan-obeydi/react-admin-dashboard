import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="relative border bg-[#F5F6FA] dark:bg-[#323D4E] border-color dark:border-[#D8D8D8]/12 rounded-3xl focus-within:ring-4 focus-within:ring-primary/30 duration-150 w-60 flex items-center gap-2 px-3 py-2">
      <FaSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="جستوجو کنید ..."
        className="text-gray-700 dark:text-white focus:outline-none placeholder:text-sm"
      />
    </div>
  );
};

export default SearchInput;
