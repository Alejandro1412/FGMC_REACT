import React from "react";
import useViews from "../../..";

const BatteryIndicator = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();
  return (
    <AdminLayout>
      <h2 className="text-center font-bold text-2xl">
        {" "}
        Bateria de indicadores{" "}
      </h2>
    </AdminLayout>
  );
};

export default BatteryIndicator;
