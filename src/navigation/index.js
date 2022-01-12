import useRouters from "./routers";
import useRoutes from "./routes";

const useNavigation = () => {
  return { useRoutes, useRouters };
};

export default useNavigation;
