import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-4 border-b-[0.5px] border-color">
      <Link to="/" className="text-color font-bold text-lg text-center">
        <p>
          <span className="primary-text-color">داش</span>بورد
        </p>
      </Link>
    </div>
  );
};

export default SidebarHeader;
