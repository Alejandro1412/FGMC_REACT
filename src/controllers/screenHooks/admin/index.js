import useBatteryIndicators from "./batteryIndicators";
import useContracts from "./contracts";
import useAdminCorrectiveActionsController from "./correctiveActions";
import useDocumentManagment from "./documentManagment";
import useAdminHome from "./home";

const useAdminControllers = () => {
  return {
    useAdminCorrectiveActionsController,
    useBatteryIndicators,
    useAdminHome,
    useContracts,
    useDocumentManagment,
  };
};

export default useAdminControllers;
