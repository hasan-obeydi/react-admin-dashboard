import SidebarHeader from "./components/SidebarHeader";
import SidebarMenus from "./components/SidebarMenus";
import SidebarLogin from "./components/SidebarLogin";
import menus from "../../../data/menus";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-60 sticky top-0 h-screen p-4 border-l-[0.5px] border-color z-10 bg-white">
      <SidebarHeader />
      <div className="p-4 flex flex-col justify-between h-full">
        <SidebarMenus menus={menus} />
        <SidebarLogin />
      </div>
    </aside>
  );
};

export default Sidebar;
