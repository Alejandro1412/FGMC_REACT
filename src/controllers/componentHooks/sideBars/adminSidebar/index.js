import { useState } from "react";
import { useHistory } from "react-router-dom";

const useAdminSidebar = () => {
  const history = useHistory();

  const [menuItems] = useState([
    {
      title: "Inicio",
      onClick: () => history.push("/admin"),
    },
    {
      title: "Gestion documental",
      onClick: () => history.push("/admin/document-managment"),
    },
    {
      title: "Contratacion institucional",
      onClick: () => history.push("/admin/contracts"),
    },
    {
      title: "Bateria de indicadores",
      onClick: () => history.push("/admin/battery-indicators"),
    },
    {
      title: "Acciones correctivas",
      onClick: () => history.push("/admin/contracts"),
    },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenCloseMenu = () => setIsMenuOpen(!isMenuOpen);

  return { menuItems, handleOpenCloseMenu, isMenuOpen };
};

export default useAdminSidebar;
