import React from "react";
import useViews from "../../..";

const BatteryIndicator = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h1>Battery indicator Screen</h1>
    </AdminLayout>
  );
};

export default BatteryIndicator;
