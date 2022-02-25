//Packages
import _ from "lodash";
import React from "react";
import { useLocation } from "react-router-dom";

//Assets
import LogoFgmc from "../../../../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";

//Hooks
import useControllers from "../../../../controllers";

const AdminSideBar = () => {
  const { pathname } = useLocation();
  console.log({ pathname });

  const { useComponentHooks } = useControllers();
  const { useSideBarsControllers } = useComponentHooks();
  const { useAdminSidebar } = useSideBarsControllers();
  const { menuItems, handleOpenCloseMenu, isMenuOpen, handleLogoutUser } =
    useAdminSidebar();

  return (
    <nav className="lg:h-full bg-slate-500 py-4 px-4 relative">
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
              className={`text-white px-3 py-4 mb-2 mx-4 my-6 cursor-pointer text-center bg-neutral-400 hover:bg-neutral-700 rounded-xl lg:text-sm ${
                pathname === item.route && "bg-neutral-700"
              }`}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <p
        className={`${
          isMenuOpen && "hidden"
        } underline font-bold cursor-pointer text-center lg:block lg:absolute lg:bottom-0 lg:py-5`}
        onClick={handleLogoutUser}
      >
        {" "}
        Cerrar Sesión
      </p>
    </nav>
  );
};

export default AdminSideBar;
