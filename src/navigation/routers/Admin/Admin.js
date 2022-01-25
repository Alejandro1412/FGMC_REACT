import React, { useRef } from "react";
import { Switch, Redirect, useRouteMatch } from "react-router-dom";
import useNavigation from "../..";
import useViews from "../../../views";

const AdminRouter = () => {
  const { path } = useRouteMatch();
  const { useScreens } = useViews();
  const {
    AdminDashboard,
    AdminContracts,
    AdminDocumentManagment,
    BatteryIndicator,
    CorrectiveActions,
  } = useScreens();
  const redirectToHome = useRef("/");

  const { useRoutes } = useNavigation();
  const { PrivateRoute } = useRoutes();

  return (
    <Switch>
      <PrivateRoute
        exact
        path={path}
        component={AdminDashboard}
        redirect={redirectToHome.current}
      />
      <PrivateRoute
        exact
        path={"/admin/contracts"}
        component={AdminContracts}
        redirect={redirectToHome.current}
      />
      <PrivateRoute
        path={"/admin/document-managment"}
        component={AdminDocumentManagment}
        redirect={redirectToHome.current}
      />
      <PrivateRoute
        path={"/admin/battery-indicators"}
        component={BatteryIndicator}
        redirect={redirectToHome.current}
      />
      <PrivateRoute
        path={"/admin/corrective-actions"}
        component={CorrectiveActions}
        redirect={redirectToHome.current}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default AdminRouter;
