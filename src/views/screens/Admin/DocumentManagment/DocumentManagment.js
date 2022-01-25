import React from "react";
import useViews from "../../..";

const AdminDocumentManagment = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h1>Document managment Screen</h1>
    </AdminLayout>
  );
};

export default AdminDocumentManagment;
