//Packages
import { useDispatch } from "react-redux";
import useAdminActions from "./admin";

//Hooks
import useAuthActions from "./auth";
import useGeneralActions from "./general";

const useActions = () => {
  const dispatch = useDispatch();
  return { dispatch, useAuthActions, useAdminActions, useGeneralActions };
};

export default useActions;
