import useHelpers from "../../../helpers";

const useAuthSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const authSelector = createSelector(
    (state) => state.user,
    (auth) => auth.token
  );

  const userSelector = createSelector(
    (state) => state.user,
    (user) => user
  );

  return { authSelector, userSelector };
};

export default useAuthSelectors;
