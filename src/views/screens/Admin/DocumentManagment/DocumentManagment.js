//Packages
import React, { useState } from "react";

//Hooks
import useViews from "../../..";
import CreateFile from "./CreateFile";
import ListFile from "./ListFile";

const AdminDocumentManagment = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const [screenActive, setScreenActive] = useState(0);

  return (
    <AdminLayout>
      {screenActive === 0 && <ListFile handleChangeScreen={setScreenActive} />}
      {screenActive === 1 && (
        <CreateFile handleChangeScreen={setScreenActive} />
      )}
    </AdminLayout>
  );
};

export default AdminDocumentManagment;
