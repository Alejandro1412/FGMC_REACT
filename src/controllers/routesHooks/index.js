import usePrivateRoute from "./privateRoute";
import usePublicRoute from "./publicRoute";

const useRoutesHooks = () => {
  return { usePrivateRoute, usePublicRoute };
};

export default useRoutesHooks;
