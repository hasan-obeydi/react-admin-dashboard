import { FaEdit } from "react-icons/fa";

const EditItemDetails = () => {
  return (
    <div className="text-green-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
      <FaEdit className="text-lg" />
    </div>
  );
};

export default EditItemDetails;
