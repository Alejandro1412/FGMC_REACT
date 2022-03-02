import useCreateReducer from "./createReducer";
import useCreateSelector from "./createSelector";
import useQuickFunctions from "./quickFunctions";

const useHelpers = () => {
  return { useCreateReducer, useCreateSelector, useQuickFunctions };
};

export default useHelpers;
