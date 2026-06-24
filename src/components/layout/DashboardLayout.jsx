import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex">
      {/* <Sidebar /> */}
      sidebar
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
