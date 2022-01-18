import GeneralRoute from "./General/GeneralRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const useRoutes = () => {
  return { GeneralRoute, PrivateRoute, PublicRoute };
};

export default useRoutes;
