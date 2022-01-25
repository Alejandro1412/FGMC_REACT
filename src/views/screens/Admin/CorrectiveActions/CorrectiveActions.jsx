import React from "react";
import useViews from "../../..";

const CorrectiveActions = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h1>Corrective Actions Screen</h1>
    </AdminLayout>
  );
};

export default CorrectiveActions;
