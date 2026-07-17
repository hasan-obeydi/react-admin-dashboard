import { CiGrid41 } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";

import Modal from "../../../components/Common/Modal/Modal";
import AddUser from "../../../components/Common/AddItem/AddUser";

const HeaderButtons = ({
  layoutType,
  setLayoutType,
  newUser,
  dispatch,
  addUserHandler,
}) => {
  const Trigger = () => {
    return (
      <button className="bg-gradiant px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-95 duration-200">
        ایجاد کاربر
      </button>
    );
  };
  return (
    <>
      <div className="icon-hover rounded-lg bg-gray-300 dark:bg-dark-primary border border-color dark:border-gray-700 hover:scale-95 hidden sm:block">
        {layoutType === "TABLE" ? (
          <CiGrid41
            onClick={() => setLayoutType("GRID")}
            className="text-2xl"
          />
        ) : (
          <CiViewTable
            onClick={() => setLayoutType("TABLE")}
            className="text-2xl"
          />
        )}
      </div>
      <Modal
        onSubmit={addUserHandler}
        dispatch={dispatch}
        modalTitle={"ایجاد کاربر"}
        Trigger={Trigger}
        newItem={newUser}
      >
        <AddUser newUser={newUser} dispatch={dispatch} />
      </Modal>
    </>
  );
};

export default HeaderButtons;
