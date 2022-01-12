import AdminContracts from "./Contract/Contract";
import AdminDocumentManagment from "./DocumentManagment/DocumentManagment";
import AdminDashboard from "./Root/Root";

const useAdminScreens = () => {
  return { AdminDashboard, AdminDocumentManagment, AdminContracts };
};

export default useAdminScreens;
