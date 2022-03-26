//Packages
import React, { useState } from "react";

//Hooks
import useViews from "../../..";

//Components
import CreateFile from "./CreateFile";
import FilesByCategory from "./FilesByCategory";
import ListFile from "./ListFile";

const AdminDocumentManagment = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const [screenActive, setScreenActive] = useState({ view: 0, data: {} });

  return (
    <AdminLayout>
      {screenActive.view === 0 && (
        <ListFile
          handleChangeScreen={setScreenActive}
          screenActive={screenActive.view}
        />
      )}
      {screenActive.view === 1 && (
        <CreateFile
          handleChangeScreen={setScreenActive}
          screenActive={screenActive.view}
        />
      )}
      {screenActive.view === 2 && (
        <FilesByCategory
          handleChangeScreen={setScreenActive}
          screenActive={screenActive}
        />
      )}
    </AdminLayout>
  );
};

export default AdminDocumentManagment;
