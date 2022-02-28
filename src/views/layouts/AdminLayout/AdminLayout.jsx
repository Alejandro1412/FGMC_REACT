//Packages
import React from "react";
import PropTypes from "prop-types";

//Hooks
import useViews from "../..";
import useModels from "../../../models";

const AdminLayout = (props) => {
  const { children } = props;

  const { useLayouts, useComponents } = useViews();
  const { useSidebars, useHeaders } = useComponents();
  const { DefaultHeader } = useHeaders();
  const { AdminSideBar } = useSidebars();
  const { ColumnTwoLayout } = useLayouts();

  const { useSelectors } = useModels();

  const { useSelector, useAuthSelectors } = useSelectors();
  const { userSelector } = useAuthSelectors();
  const { nombre, apellido } = useSelector(userSelector);

  return (
    <ColumnTwoLayout
      leftPart={<AdminSideBar />}
      rightPart={
        <>
          <DefaultHeader name={`${nombre} ${apellido}`} />
          <main id="mainSection" className="flex justify-center items-center">
            <section className="max-h-full rounded shadow-lg w-3/4 max-w-7xl bg-cover py-10 px-10 overflow-auto">
              {children}
            </section>
          </main>
        </>
      }
      className="w-full h-full"
      classNameRight="w-full h-full"
    />
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
