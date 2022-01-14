import useInitialStates from "./initialStates";
import useReducers from "./reducers";
import useSelectors from "./selectors";

const useModels = () => {
  return { useSelectors, useReducers, useInitialStates };
};

export default useModels;
