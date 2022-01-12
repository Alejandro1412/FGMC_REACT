import Login from "./Login/Login";
import useAdminScreens from "./Admin";

const useScreens = () => {
  const adminScreens = useAdminScreens();
  return { Login, ...adminScreens };
};

export default useScreens;
