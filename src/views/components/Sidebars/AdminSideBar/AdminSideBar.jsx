//Packages
import _ from "lodash";
import React from "react";

//Assets
import LogoFgmc from "../../../../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";

//Hooks
import useControllers from "../../../../controllers";

const AdminSideBar = () => {
  const { useComponentHooks } = useControllers();
  const { useSideBarsControllers } = useComponentHooks();
  const { useAdminSidebar } = useSideBarsControllers();
  const { menuItems, handleOpenCloseMenu, isMenuOpen } = useAdminSidebar();

  return (
    <nav className="lg:h-full bg-slate-500 py-4 px-4">
      <div className="flex justify-between items-center">
        <img
          src={LogoFgmc}
          alt="Fundación gimnasio moderno del cauca"
          className="w-32 h-28 lg:w-56 lg:h-48 "
        />
        <BiMenu
          className="w-14 h-14 lg:hidden cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={handleOpenCloseMenu}
        />
      </div>
      <ul className={`${isMenuOpen && "hidden"} max-w-sm mx-auto lg:block`}>
        {_.map(menuItems, (item, index) => {
          return (
            <li
              key={`menu-sideBar${index}`}
              onClick={item.onClick}
              className="text-white px-3 py-4 mb-2 mx-4 my-6 cursor-pointer text-center bg-neutral-400 hover:bg-neutral-700 rounded-xl"
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
