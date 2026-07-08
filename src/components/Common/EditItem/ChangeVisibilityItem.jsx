import { MdVisibility } from "react-icons/md";
import clsx from "clsx";

import Modal from "../Modal/Modal";

const ChangeVisibilityItem = ({ isPublished, itemTitle, itemType }) => {
  const Trigger = () => {
    return (
      <div className="text-blue-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <MdVisibility className="text-2xl sm:text-xl" />
      </div>
    );
  };
  return (
    <Modal title="تغییر وضعیت نمایش" Trigger={Trigger}>
      <div className="flex-center">
        <p>
          آیا از{" "}
          <span
            className={clsx(isPublished ? "text-red-500" : "text-green-500")}
          >
            {isPublished ? "خصوصی" : "عمومی"}
          </span>{" "}
          کردن {itemType} <span className="font-bold">{itemTitle}</span> اطمینان
          دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityItem;
