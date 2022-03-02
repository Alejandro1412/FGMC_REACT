import useAdminControllers from "./admin";
import useAuth from "./auth";

const useScreenHooks = () => {
  return { useAuth, useAdminControllers };
};

export default useScreenHooks;
