import { RiDeleteBin6Line } from "react-icons/ri";

import Modal from "../Modal/Modal";

const RemoveItem = ({ itemTitle, itemType }) => {
  const Trigger = () => {
    return (
      <div className="text-red-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <RiDeleteBin6Line className="text-lg" />
      </div>
    );
  };
  return (
    <Modal title="حذف محصول" Trigger={Trigger}>
      <div className="flex-center">
        <p>
          آیا از حذف {itemType}{" "}
          <span className="text-red-500 font-bold">{itemTitle}</span> اطمینان
          دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default RemoveItem;
