import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import useToggle from "../../../../hooks/useToggle";

const ChangeTheme = () => {
  const [isDarkMode, toggle] = useToggle(false);

  return (
    <div
      onClick={toggle}
      className="cursor-pointer hover:bg-gray-200 p-2 rounded-full transition duration-300"
    >
      {isDarkMode ? (
        <MdOutlineLightMode className="text-2xl" />
      ) : (
        <MdOutlineDarkMode className="text-2xl" />
      )}
    </div>
  );
};

export default ChangeTheme;
