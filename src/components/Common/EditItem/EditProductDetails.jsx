import { FaEdit } from "react-icons/fa";

import Modal from "../Modal/Modal";
import { useReducer } from "react";
import productReducer from "../../../reducers/productReducer";
import AddProduct from "../AddItem/AddProduct";

const EditProductDetails = ({ item, editHandler, itemType }) => {
  const [newProduct, dispatch] = useReducer(productReducer, {
    title: item.title,
    isPublished: item.isPublished,
    entity: item.entity,
    price: item.price,
    description: item.description,
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
      itemType={itemType}
      onSubmit={editHandler}
      newItem={newProduct}
      item={item}
      modalTitle={`ویرایش ${itemType}`}
      Trigger={Trigger}
    >
      <AddProduct newProduct={newProduct} dispatch={dispatch} />
    </Modal>
  );
};

export default EditProductDetails;
