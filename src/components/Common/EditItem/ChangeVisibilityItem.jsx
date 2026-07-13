import { MdVisibility } from "react-icons/md";
import clsx from "clsx";

import Modal from "../Modal/Modal";

const ChangeVisibilityItem = ({ item, changeVisbilityHandler, itemType }) => {
  const Trigger = () => {
    return (
      <div className="text-blue-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <MdVisibility className="text-2xl sm:text-xl" />
      </div>
    );
  };
  return (
    <Modal
      item={item}
      onSubmit={changeVisbilityHandler}
      modalTitle="تغییر وضعیت نمایش"
      Trigger={Trigger}
    >
      <div className="flex-center">
        <p>
          آیا از{" "}
          <span
            className={clsx(
              item.isPublished ? "text-red-500" : "text-green-500",
            )}
          >
            {item.isPublished ? "خصوصی" : "عمومی"}
          </span>{" "}
          کردن {itemType} <span className="font-bold">{item.title}</span>{" "}
          اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityItem;
