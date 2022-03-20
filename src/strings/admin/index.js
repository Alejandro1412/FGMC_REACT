import useAdminCorrectiveActionsTypes from "./correctiveActions";
import useAdminContractsTypes from "./createContract";
import useDocumentManagmentTypes from "./documentManagment";

const useAdminTypes = () => {
  return {
    useAdminCorrectiveActionsTypes,
    useAdminContractsTypes,
    useDocumentManagmentTypes,
  };
};

export default useAdminTypes;
