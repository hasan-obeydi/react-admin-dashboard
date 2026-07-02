import clsx from "clsx";
import { Fragment } from "react";
import { NavLink } from "react-router";

const SidebarMenus = ({ setIsMenuOpen, menus }) => {
  return (
    <div className="space-y-3 mt-4">
      {menus.map((menu) => (
        <Fragment key={menu.id}>
          <span className="text-xs text-gray-500 font-semibold">
            {menu.title}:
          </span>
          <ul
            key={menu.id}
            className="mt-3 *:w-full *:flex *:items-center *:gap-2 *:p-2 *:hover:bg-gray-100 dark:*:hover:bg-gray-700 *:rounded-md *:duration-150 space-y-1"
          >
            {menu.items.map((nav) => (
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                key={nav.id}
                to={nav.href}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "relative *:[svg]:text-primary bg-gray-100 dark:bg-gray-700 before: before:h-full before:w-1 before:bg-primary before:absolute before:-right-4 before:rounded-l-md"
                      : "",
                  )
                }
              >
                <nav.icon />
                <span>{nav.title}</span>
              </NavLink>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default SidebarMenus;
