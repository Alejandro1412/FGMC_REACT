import useModels from "../../../models";

const useIsAuth = () => {
  const { useSelectors } = useModels();
  const { useSelector, useAuthSelectors } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const isAuth = useSelector(authSelector);
  return { isAuth: Boolean(isAuth) };
};

export default useIsAuth;
