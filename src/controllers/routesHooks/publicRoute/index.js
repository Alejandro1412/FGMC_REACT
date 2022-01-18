import useControllers from "../..";

const usePublicRoute = () => {
  const { useGeneralHooks } = useControllers();
  const { useIsAuth } = useGeneralHooks();
  const { isAuth } = useIsAuth();

  return { props: {}, permission: isAuth === false };
};

export default usePublicRoute;
