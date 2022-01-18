//Packages
import { useDispatch } from "react-redux";

//Hooks
import useAuthActions from "./auth";

const useActions = () => {
  const dispatch = useDispatch();

  return { dispatch, useAuthActions };
};

export default useActions;
