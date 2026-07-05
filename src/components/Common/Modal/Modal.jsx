import { Activity } from "react";

import { IoClose } from "react-icons/io5";

import useToggle from "../../../hooks/useToggle";
import ModalFooter from "./components/ModalFooter";

const Modal = ({ Trigger, children, title }) => {
  const [isModalOpen, toggle] = useToggle(false);
  return (
    <>
      <div onClick={toggle}>{Trigger()}</div>
      <Activity mode={isModalOpen ? "visible" : "hidden"}>
        <div
          id="modal-screen"
          className="fixed top-0 bg-black/50 transition duration-500 w-dvw h-dvh flex-center right-0 z-100 "
        >
          <div className="w-120 bg-white dark:bg-dark-body rounded-lg">
            <div className="flex justify-between items-center border-b border-color dark:border-gray-700 p-4 mb-4">
              <h3 className="text-xl">{title}</h3>
              <div className="icon-hover" onClick={() => toggle()}>
                <IoClose className="text-2xl" />
              </div>
            </div>
            <div className="p-4">{children}</div>
            <ModalFooter toggle={toggle} />
          </div>
        </div>
      </Activity>
    </>
  );
};

export default Modal;
