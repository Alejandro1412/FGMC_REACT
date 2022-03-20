import useAdminCorrectiveActionsProviders from "./correctiveActions";
import useContractsProviders from "./createContract";
import useDocumentManagmentProviders from "./documentManagment";

const useAdminProviders = () => {
  return {
    useAdminCorrectiveActionsProviders,
    useContractsProviders,
    useDocumentManagmentProviders,
  };
};

export default useAdminProviders;
