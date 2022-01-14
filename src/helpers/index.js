import useCreateReducer from "./createReducer";
import useCreateSelector from "./createSelector";

const useHelpers = () => {
  return { useCreateReducer, useCreateSelector };
};

export default useHelpers;
