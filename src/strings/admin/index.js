import useAdminCorrectiveActionsTypes from "./correctiveActions";
import useAdminContractsTypes from "./createContract";

const useAdminTypes = () => {
  return { useAdminCorrectiveActionsTypes, useAdminContractsTypes };
};

export default useAdminTypes;
