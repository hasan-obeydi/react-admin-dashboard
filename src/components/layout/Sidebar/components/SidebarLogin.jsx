import { Link } from "react-router";
import { CiLogin } from "react-icons/ci";

const SidebarLogin = () => {
  return (
    <div className="pt-2 border-t-[0.5px] border-color dark:border-[#D8D8D8]/12">
      <Link
        to="/login"
        className="text-[#333333] dark:text-white flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
      >
        <CiLogin />
        <span>ورود به سیستم</span>
      </Link>
    </div>
  );
};

export default SidebarLogin;
