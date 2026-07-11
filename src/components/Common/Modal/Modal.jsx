import { Activity } from "react";

import { IoClose } from "react-icons/io5";

import useToggle from "../../../hooks/useToggle";
import ModalFooter from "./components/ModalFooter";

const Modal = (props) => {
  const [isModalOpen, toggle] = useToggle(false);
  return (
    <>
      <div onClick={toggle}>{props.Trigger()}</div>
      <Activity mode={isModalOpen ? "visible" : "hidden"}>
        <div
          id="modal-screen"
          className="fixed top-0 bg-black/70 transition duration-500 w-screen h-screen flex-center right-0 z-100 "
        >
          <div className="max-w-120 w-[80%] bg-white dark:bg-dark-body rounded-lg">
            <div className="flex justify-between items-center border-b border-color dark:border-gray-700 p-4">
              <h3 className="text-xl">{props.modalTitle}</h3>
              <div className="icon-hover" onClick={() => toggle()}>
                <IoClose className="text-2xl" />
              </div>
            </div>
            <div className="p-4">{props.children}</div>
            <ModalFooter toggle={toggle} {...props} />
          </div>
        </div>
      </Activity>
    </>
  );
};

export default Modal;
