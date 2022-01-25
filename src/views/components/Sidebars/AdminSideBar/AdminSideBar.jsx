import _ from "lodash";
import React from "react";

import useControllers from "../../../../controllers";

const AdminSideBar = () => {
  const { useComponentHooks } = useControllers();
  const { useSideBarsControllers } = useComponentHooks();
  const { useAdminSidebar } = useSideBarsControllers();
  const { menuItems } = useAdminSidebar();
  return (
    <nav className="h-full bg-slate-500 py-4">
      <ul>
        {_.map(menuItems, (item, index) => {
          return (
            <li
              key={`menu-sideBar${index}`}
              onClick={item.onClick}
              className="text-white px-3 py-4 mb-2 mx-4 cursor-pointer flex items-center justify-center bg-neutral-400 rounded-xl
               "
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AdminSideBar;
