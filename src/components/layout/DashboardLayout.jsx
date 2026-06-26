import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="*:px-6 w-full">
        <Topbar />
        <div>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
