import React, { useState } from "react";

//Hooks
import useViews from "../../..";

//Componentes
import CreateContract from "./CreateContract";
import DetailContract from "./DetailContract";
import ListContract from "./ListContract";
import PdfView from "./PdfView";

const AdminContracts = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const [screenActive, setScreenActive] = useState({ view: 0, data: {} });

  return (
    <AdminLayout>
      {screenActive.view === 0 && (
        <ListContract
          handleChangeScreen={setScreenActive}
          screenActive={screenActive.view}
        />
      )}
      {screenActive.view === 1 && (
        <CreateContract
          handleChangeScreen={setScreenActive}
          screenActive={screenActive.view}
        />
      )}
      {screenActive.view === 2 && (
        <DetailContract handleChangeScreen={setScreenActive} />
      )}
      {screenActive.view === 3 && (
        <PdfView
          handleChangeScreen={setScreenActive}
          screenActive={screenActive}
        />
      )}
    </AdminLayout>
  );
};

export default AdminContracts;
