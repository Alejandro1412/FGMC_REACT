import useBatteryIndicators from "./batteryIndicators";
import useContracts from "./contracts";
import useAdminCorrectiveActionsController from "./correctiveActions";
import useAdminHome from "./home";

const useAdminControllers = () => {
  return {
    useAdminCorrectiveActionsController,
    useBatteryIndicators,
    useAdminHome,
    useContracts,
  };
};

export default useAdminControllers;
