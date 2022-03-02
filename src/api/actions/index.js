//Packages
import { useDispatch } from "react-redux";
import useAdminActions from "./admin";

//Hooks
import useAuthActions from "./auth";

const useActions = () => {
  const dispatch = useDispatch();

  return { dispatch, useAuthActions, useAdminActions };
};

export default useActions;
