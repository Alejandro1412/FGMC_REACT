import BatteryIndicator from "./BatteryIndicator/BatteryIndicator";
import AdminContracts from "./Contract/Contract";
import CorrectiveActions from "./CorrectiveActions/CorrectiveActions";
import AdminDocumentManagment from "./DocumentManagment/DocumentManagment";
import AdminDashboard from "./Root/Root";

const useAdminScreens = () => {
  return {
    AdminDashboard,
    AdminDocumentManagment,
    AdminContracts,
    CorrectiveActions,
    BatteryIndicator,
  };
};

export default useAdminScreens;
