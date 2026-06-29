import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex dark:text-white">
      <Sidebar />
      <section className="*:px-6 w-full">
        <Topbar />
        <div id="content" className="dark:bg-dark-body">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
