import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-5.5 pt-4 border-b border-color">
      <Link to="/" className="text-color font-bold text-lg text-center">
        <p>
          <span className="text-primary">داش</span>بورد
        </p>
      </Link>
    </div>
  );
};

export default SidebarHeader;
