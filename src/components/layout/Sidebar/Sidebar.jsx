import SidebarHeader from "./components/SidebarHeader";
import SidebarMenus from "./components/SidebarMenus";
import SidebarLogin from "./components/SidebarLogin";
import menus from "../../../data/menus";

const Sidebar = () => {
  return (
    <aside className="p-4 flex flex-col w-60 sticky top-0 h-screen z-10 bg-white dark:bg-dark-primary  border-l border-color dark:border-none">
      <SidebarHeader />
      <div className="flex flex-col justify-between h-full">
        <SidebarMenus menus={menus} />
        <SidebarLogin />
      </div>
    </aside>
  );
};

export default Sidebar;
