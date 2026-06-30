import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useResize from "../../../../hooks/useResize";
import { useEffect } from "react";

const SearchInput = ({ isMobileSearchOpen, setIsMoblieSearchOpen }) => {
  const WindowSize = useResize();

  useEffect(() => {
    if (WindowSize.width >= 640) {
      setIsMoblieSearchOpen(false);
    }
  }, [WindowSize, setIsMoblieSearchOpen]);

  return (
    <>
      <div className="relative border bg-[#F5F6FA] dark:bg-[#323D4E] border-color dark:border-[#D8D8D8]/12 rounded-3xl focus-within:ring-4 focus-within:ring-primary/30 duration-150 w-40 md:w-60 items-center gap-1 px-1 py-2 hidden sm:flex">
        <FaSearch className="text-gray-500 w-[20%]" />
        <input
          type="text"
          placeholder="جستوجو کنید ..."
          className="text-gray-700 dark:text-white focus:outline-none placeholder:text-sm w-[80%] "
        />
      </div>
      {isMobileSearchOpen ? (
        <div className="border bg-[#F5F6FA] dark:bg-[#323D4E] border-color dark:border-[#D8D8D8]/12 rounded-3xl focus-within:ring-4 focus-within:ring-primary/30 duration-150 items-center gap-2 py-1 px-1 flex">
          <FaSearch className="text-gray-500 w-[20%]" />
          <input
            type="text"
            placeholder="جستوجو کنید ..."
            className="text-gray-700 dark:text-white focus:outline-none placeholder:text-sm w-[80%] "
          />
          <div
            onClick={() => {
              setIsMoblieSearchOpen(false);
            }}
            className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-200"
          >
            <IoClose className="text-xl" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setIsMoblieSearchOpen(true);
          }}
          className="sm:hidden cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-200"
        >
          <FaSearch className="text-xl" />
        </div>
      )}
    </>
  );
};

export default SearchInput;
