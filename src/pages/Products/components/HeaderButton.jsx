import AddItem from "../../../components/Common/AddItem/AddItem";
import Modal from "../../../components/Common/Modal/Modal";

const HeaderButtons = () => {
  const Trigger = () => {
    return (
      <button className="bg-gradiant px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-103 duration-200">
        ایجاد محصول
      </button>
    );
  };
  return (
    <Modal title={"ایجاد محصول"} Trigger={Trigger}>
      <AddItem />
    </Modal>
  );
};

export default HeaderButtons;
