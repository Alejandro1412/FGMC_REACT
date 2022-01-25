//Packages
import React from "react";
import PropTypes from "prop-types";

//Hooks
import useViews from "../..";

const AdminLayout = (props) => {
  const { children } = props;

  const { useLayouts, useComponents } = useViews();
  const { useSidebars } = useComponents();
  const { AdminSideBar } = useSidebars();
  const { ColumnTwoLayout } = useLayouts();
  return (
    <ColumnTwoLayout
      leftPart={<AdminSideBar />}
      rightPart={<main>{children}</main>}
      className="h-screen"
    />
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
