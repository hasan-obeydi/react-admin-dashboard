import { useEffect } from "react";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import useLocalStorage from "../../../../hooks/useLocalStorage";

const ChangeTheme = () => {
  const [theme, setLocalStorage] = useLocalStorage("theme", "light");
  const themeHandler = () => {
    setLocalStorage(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return (
    <div
      onClick={() => themeHandler()}
      className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition duration-200"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="text-2xl" />
      ) : (
        <MdOutlineDarkMode className="text-2xl" />
      )}
    </div>
  );
};

export default ChangeTheme;
