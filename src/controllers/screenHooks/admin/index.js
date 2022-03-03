import useBatteryIndicators from "./batteryIndicators";
import useAdminCorrectiveActionsController from "./correctiveActions";
import useAdminHome from "./home";

const useAdminControllers = () => {
  return {
    useAdminCorrectiveActionsController,
    useBatteryIndicators,
    useAdminHome,
  };
};

export default useAdminControllers;
