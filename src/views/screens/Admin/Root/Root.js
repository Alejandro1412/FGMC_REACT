import React from "react";
import useViews from "../../..";

const AdminDashboard = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h1>Admin Dashboard Screen</h1>
    </AdminLayout>
  );
};

export default AdminDashboard;
