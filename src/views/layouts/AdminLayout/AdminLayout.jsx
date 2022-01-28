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
          <main className="h-full flex justify-center items-center">
            <section className=" w-11/12 rounded shadow-lg max-w-screen-lg bg-cover py-4">
              {children}
            </section>
          </main>
        </>
      }
      className="h-screen"
      classNameRight="w-full "
    />
  );
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
