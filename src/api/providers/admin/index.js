import useAdminCorrectiveActionsProviders from "./correctiveActions";
import useContractsProviders from "./createContract";

const useAdminProviders = () => {
  return { useAdminCorrectiveActionsProviders, useContractsProviders };
};

export default useAdminProviders;
