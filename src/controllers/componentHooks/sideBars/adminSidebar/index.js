import { useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../../../api";

const useAdminSidebar = () => {
  const history = useHistory();

  const { useActions } = useApi();
  const { useAuthActions, dispatch } = useActions();
  const { actLogout } = useAuthActions();

  const [menuItems] = useState([
    {
      title: "Inicio",
      onClick: () => history.push("/admin"),
      route: "/admin",
    },
    {
      title: "Gestion documental",
      onClick: () => history.push("/admin/document-managment"),
      route: "/admin/document-managment",
    },
    {
      title: "Contratacion institucional",
      onClick: () => history.push("/admin/contracts"),
      route: "/admin/contracts",
    },
    {
      title: "Bateria de indicadores",
      onClick: () => history.push("/admin/battery-indicators"),
      route: "/admin/battery-indicators",
    },
    {
      title: "Acciones correctivas",
      onClick: () => history.push("/admin/corrective-actions"),
      route: "/admin/corrective-actions",
    },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenCloseMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoutUser = () => dispatch(actLogout());

  return { menuItems, handleOpenCloseMenu, isMenuOpen, handleLogoutUser };
};

export default useAdminSidebar;
