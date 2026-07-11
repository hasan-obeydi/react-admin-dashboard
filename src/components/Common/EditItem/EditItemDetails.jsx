import { FaEdit } from "react-icons/fa";

import Modal from "../Modal/Modal";
import AddItem from "../AddItem/AddItem";
import { useReducer } from "react";
import productReducer from "../../../reducers/productReducer";

const EditItemDetails = (props) => {
  const [newProduct, dispatch] = useReducer(productReducer, {
    title: props.itemTitle,
    isPublished: props.isPublished,
    entity: props.itemEntity,
    price: props.itemPrice,
    description: props.itemDescription,
  });
  const Trigger = () => {
    return (
      <div className="text-green-500 cursor-pointer hover:bg-gray-300  dark:hover:bg-gray-700 p-2 rounded-full transition duration-150">
        <FaEdit className="text-2xl sm:text-xl" />
      </div>
    );
  };
  return (
    <Modal
      onSubmit={props.editHandler}
      newProduct={newProduct}
      {...props}
      modalTitle="ویرایش محصول"
      Trigger={Trigger}
    >
      <AddItem newProduct={newProduct} dispatch={dispatch} />
    </Modal>
  );
};

export default EditItemDetails;
