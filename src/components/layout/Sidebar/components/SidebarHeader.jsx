import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-5.5 pt-4 border-b border-color dark:border-[#D8D8D8]/12">
      <Link to="/" className="text-color font-bold text-lg text-center">
        <p>
          <span className="text-primary">داش</span>
          <span className="dark:text-white">بورد</span>
        </p>
      </Link>
    </div>
  );
};

export default SidebarHeader;
