import React, { useState } from "react";

//Hooks
import useViews from "../../..";

//Components
import CreateCorrectiveActions from "./CreateCorrectiveActions";
import ListOfCorrectiveActions from "./ListOfCorrectiveActions";

const CorrectiveActions = () => {
  const { useLayouts } = useViews();
  const { AdminLayout } = useLayouts();

  const [screenActive, setScreenActive] = useState(0);

  return (
    <AdminLayout>
      {screenActive === 0 && (
        <ListOfCorrectiveActions handleChangeScreen={setScreenActive} />
      )}
      {screenActive === 1 && (
        <CreateCorrectiveActions handleChangeScreen={setScreenActive} />
      )}
    </AdminLayout>
  );
};

export default CorrectiveActions;
