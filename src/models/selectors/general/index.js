import useHelpers from "../../../helpers";

const useGeneralSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const generalToastSelector = createSelector(
    (state) => state.generalToast,
    (generalToast) => generalToast
  );

  return { generalToastSelector };
};

export default useGeneralSelectors;
