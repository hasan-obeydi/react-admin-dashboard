import { useEffect } from "react";

import clsx from "clsx";

import SidebarHeader from "./components/SidebarHeader";
import SidebarMenus from "./components/SidebarMenus";
import SidebarLogin from "./components/SidebarLogin";
import menus from "../../../data/menus";
import useResize from "../../../hooks/useResize";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const WindowSize = useResize();

  useEffect(() => {
    if (WindowSize.width >= 640) {
      setIsMenuOpen(false);
    }
  }, [WindowSize, setIsMenuOpen]);

  return (
    <aside
      className={clsx(
        isMenuOpen ? "flex fixed" : "hidden sm:flex sm:sticky",
        "p-4 flex-col h-screen top-0 w-60  z-50 bg-white dark:bg-dark-primary border-l border-color dark:border-l-gray-700",
      )}
    >
      <SidebarHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-col justify-between h-full">
        <SidebarMenus setIsMenuOpen={setIsMenuOpen} menus={menus} />
        <SidebarLogin />
      </div>
    </aside>
  );
};

export default Sidebar;
