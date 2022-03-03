import useBatteryIndicators from "./batteryIndicators";
import useAdminCorrectiveActionsController from "./correctiveActions";

const useAdminControllers = () => {
  return { useAdminCorrectiveActionsController, useBatteryIndicators };
};

export default useAdminControllers;
