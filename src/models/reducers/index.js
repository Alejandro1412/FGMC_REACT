//Packages
import { combineReducers } from "redux";

//Hooks
import useUserReducers from "./user";
import useGeneralReducers from "./general";

const useReducers = () => {
  const { user } = useUserReducers();
  const { generalToast } = useGeneralReducers();
  return combineReducers({ user, generalToast });
};

export default useReducers;
