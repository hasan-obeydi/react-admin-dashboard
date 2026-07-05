import { FaEdit } from "react-icons/fa";

import Modal from "../Modal/Modal";
import AddItem from "../AddItem/AddItem";

const EditItemDetails = (product) => {
  const Trigger = () => {
    return (
      <div className="text-green-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <FaEdit className="text-lg" />
      </div>
    );
  };
  return (
    <Modal title="ویرایش محصول" Trigger={Trigger}>
      <AddItem {...product} />
    </Modal>
  );
};

export default EditItemDetails;
