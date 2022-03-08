import useApi from "../../..";
import useStrings from "../../../../strings";

const useContractsActions = () => {
  const { useProviders } = useApi();
  const { useAdminProviders } = useProviders();
  const { useContractsProviders } = useAdminProviders();
  const { createContract } = useContractsProviders();

  const { useAdminTypes } = useStrings();
  const { useAdminContractsTypes } = useAdminTypes();
  const { CREATE_CONTRACT } = useAdminContractsTypes();

  const actCreateContract =
    ({ nombreContrato }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const res = await createContract({
          nombreContrato,
        });
        dispatch({ type: CREATE_CONTRACT });
        onSuccess && onSuccess(res);
      } catch (error) {
        onError && onError();
      }
    };

  return { actCreateContract };
};

export default useContractsActions;
