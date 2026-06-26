import { Outlet } from "react-router";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="*:px-6">
        {/* <Topbar /> */}
        <div>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
