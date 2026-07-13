import { RiDeleteBin6Line } from "react-icons/ri";

import Modal from "../Modal/Modal";

const RemoveItem = ({ item, deleteHandler, itemType }) => {
  const Trigger = () => {
    return (
      <div className="text-red-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <RiDeleteBin6Line className="text-2xl sm:text-xl" />
      </div>
    );
  };
  return (
    <Modal
      item={item}
      onSubmit={deleteHandler}
      modalTitle={`حذف ${itemType}`}
      Trigger={Trigger}
    >
      <div className="flex-center">
        <p>
          آیا از حذف {itemType}{" "}
          <span className="text-red-500 font-bold">{item.title}</span> اطمینان
          دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default RemoveItem;
