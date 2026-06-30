import { Outlet } from "react-router";

import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import useToggle from "../../hooks/useToggle";
import Overlay from "../Common/Overlay";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen, toggleMenu] = useToggle(false);
  return (
    <main id="root" className="flex dark:text-white *:duration-150">
      <Sidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />
      <section className="*:px-6 w-full">
        <Topbar toggleMenu={toggleMenu} />
        <div id="content" className="dark:bg-dark-body">
          <Outlet />
        </div>
      </section>
      {isMenuOpen && <Overlay setIsMenuOpen={setIsMenuOpen} />}
    </main>
  );
};

export default DashboardLayout;
