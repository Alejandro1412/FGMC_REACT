import useApi from "../../../../api";

const useContracts = () => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useContractsActions } = useAdminActions();
  const { actCreateContract } = useContractsActions();

  const handleCreateContract = () => {
    dispatch(actCreateContract({ nombreContrato: "Prueba desde React" }));
  };

  return { handleCreateContract };
};

export default useContracts;
