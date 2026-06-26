import clsx from "clsx";
import { NavLink } from "react-router";

const SidebarMenus = ({ menus }) => {
  return (
    <div className="space-y-3">
      {menus.map((menu) => (
        <>
          <span className="text-xs text-gray-500 font-semibold">
            {menu.title}:
          </span>
          <ul
            key={menu.id}
            className="mt-3 *:w-full *:flex *:items-center *:gap-2 *:p-2 *:hover:bg-gray-100 *:rounded-md *:duration-100 space-y-1"
          >
            {menu.items.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.href}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "relative *:[svg]:primary-text-color bg-gray-100 before: before:bg-primary-text-color before:h-full before:w-1 before:primary-bg-color before:absolute before:-right-8 before:rounded-l-md"
                      : "",
                  )
                }
              >
                <nav.icon />
                <span className="">{nav.title}</span>
              </NavLink>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default SidebarMenus;
