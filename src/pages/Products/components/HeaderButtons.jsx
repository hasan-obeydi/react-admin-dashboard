import { CiGrid41 } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";

import AddProduct from "../../../components/Common/AddItem/AddProduct";
import Modal from "../../../components/Common/Modal/Modal";

const HeaderButtons = ({
  layoutType,
  setLayoutType,
  newProduct,
  dispatch,
  addProductHandler,
}) => {
  const Trigger = () => {
    return (
      <button className="bg-gradiant px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-95 duration-200">
        ایجاد محصول
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
        itemType="محصول"
        onSubmit={addProductHandler}
        dispatch={dispatch}
        modalTitle={"ایجاد محصول"}
        Trigger={Trigger}
        newItem={newProduct}
      >
        <AddProduct newProduct={newProduct} dispatch={dispatch} />
      </Modal>
    </>
  );
};

export default HeaderButtons;
