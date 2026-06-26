import { Link } from "react-router";
import { CiLogin } from "react-icons/ci";

const SidebarLogin = () => {
  return (
    <div className="pt-2 border-t-[0.5px] border-color">
      <Link
        to="/login"
        className="text-[#333333] flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
      >
        <CiLogin />
        <span>ورود به سیستم</span>
      </Link>
    </div>
  );
};

export default SidebarLogin;
