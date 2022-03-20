import useAdminCorrectiveActions from "./correctiveActions";
import useContractsActions from "./createContract";
import useDocumentManagmentActions from "./documentManagment";

const useAdminActions = () => {
  return {
    useAdminCorrectiveActions,
    useContractsActions,
    useDocumentManagmentActions,
  };
};

export default useAdminActions;
