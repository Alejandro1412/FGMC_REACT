import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import useViews from "../../../views";

const AdminRouter = () => {
  const { path } = useRouteMatch();
  const { useScreens } = useViews();
  const { AdminDashboard, AdminContracts, AdminDocumentManagment } =
    useScreens();

  return (
    <Switch>
      <Route exact path={path} component={AdminDashboard} />
      <Route exact path={"/admin/contracts"} component={AdminContracts} />
      <Route
        path={"/admin/document-managment"}
        component={AdminDocumentManagment}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default AdminRouter;
