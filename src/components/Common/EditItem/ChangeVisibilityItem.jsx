import { MdVisibility } from "react-icons/md";

const ChangeVisibilityItem = () => {
  return (
    <div className="text-blue-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
      <MdVisibility className="text-lg" />
    </div>
  );
};

export default ChangeVisibilityItem;
