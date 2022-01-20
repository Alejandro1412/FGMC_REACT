//Packages
import React from "react";
import PropTypes from "prop-types";

//Hooks
import useViews from "../..";

const AdminLayout = (props) => {
  const { children } = props;

  const { useLayouts } = useViews();
  const { ColumnTwoLayout } = useLayouts();
  return (
    <ColumnTwoLayout
      leftPart={
        <>
          {" "}
          <h1>Im the left side</h1>
        </>
      }
      rightPart={<main>{children}</main>}
    />
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
