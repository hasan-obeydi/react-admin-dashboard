import { RiDeleteBin6Line } from "react-icons/ri";

const RemoveItem = () => {
  return (
    <div className="text-red-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
      <RiDeleteBin6Line className="text-lg" />
    </div>
  );
};

export default RemoveItem;
