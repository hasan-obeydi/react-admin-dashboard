import { FaEdit } from "react-icons/fa";

import Modal from "../Modal/Modal";
import { useReducer } from "react";
import userReducer from "../../../reducers/userReducer";
import AddUser from "../AddItem/AddUser";

const EditUserDetails = ({ item, editHandler, itemType }) => {
  const [newUser, dispatch] = useReducer(userReducer, {
    firstname: item.firstname,
    lastname: item.lastname,
    username: item.username,
    email: item.email,
    age: item.age,
    city: item.city,
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
      newItem={newUser}
      item={item}
      modalTitle={`ویرایش ${itemType}`}
      Trigger={Trigger}
    >
      <AddUser newUser={newUser} dispatch={dispatch} />
    </Modal>
  );
};

export default EditUserDetails;
