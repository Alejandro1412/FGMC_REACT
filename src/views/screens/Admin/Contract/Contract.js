import React, { useState } from "react";

//Hooks
import useViews from "../../..";

//Componentes
import CreateContract from "./CreateContract";
import DetailContract from "./DetailContract";
import ListContract from "./ListContract";

const AdminContracts = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const [screenActive, setScreenActive] = useState(0);

  return (
    <AdminLayout>
      {screenActive === 0 && (
        <ListContract
          handleChangeScreen={setScreenActive}
          screenActive={screenActive}
        />
      )}
      {screenActive === 1 && (
        <CreateContract
          handleChangeScreen={setScreenActive}
          screenActive={screenActive}
        />
      )}
      {screenActive === 2 && (
        <DetailContract handleChangeScreen={setScreenActive} />
      )}
    </AdminLayout>
  );
};

export default AdminContracts;
