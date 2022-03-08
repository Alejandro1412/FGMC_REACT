import useAdminCorrectiveActions from "./correctiveActions";
import useContractsActions from "./createContract";

const useAdminActions = () => {
  return { useAdminCorrectiveActions, useContractsActions };
};

export default useAdminActions;
