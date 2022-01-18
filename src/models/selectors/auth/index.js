import useHelpers from "../../../helpers";

const useAuthSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const authSelector = createSelector(
    (state) => state.user,
    (auth) => auth.token
  );
  return { authSelector };
};

export default useAuthSelectors;
