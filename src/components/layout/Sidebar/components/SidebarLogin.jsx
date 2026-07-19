import { useNavigate } from "react-router";
import { CiLogin } from "react-icons/ci";
import Modal from "../../../Common/Modal/Modal";

const SidebarLogin = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/login", {
      replace: true,
    });
    localStorage.removeItem("token");
  };
  const Trigger = () => {
    return (
      <div className="text-[#333333] dark:text-white flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md border-t-[0.5px] border-color dark:border-[#D8D8D8]/12 cursor-pointer">
        <CiLogin />
        <span>خروج از حساب</span>
      </div>
    );
  };
  return (
    <Modal Trigger={Trigger} onSubmit={onSubmit} modalTitle="خروج از حساب">
      آیا از خارج شدن حساب کاربری خود اطمینان دارید؟
    </Modal>
  );
};

export default SidebarLogin;
