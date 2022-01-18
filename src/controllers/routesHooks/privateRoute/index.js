import useControllers from "../..";

const usePrivateRoute = () => {
  const { useGeneralHooks } = useControllers();
  const { useIsAuth } = useGeneralHooks();
  const { isAuth } = useIsAuth();

  return { props: {}, permission: isAuth === true };
};

export default usePrivateRoute;
