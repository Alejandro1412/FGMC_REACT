//Packages
import { combineReducers } from "redux";

//Hooks
import useUserReducers from "./user";

const useReducers = () => {
  const { user } = useUserReducers();
  return combineReducers({ user });
};

export default useReducers;
