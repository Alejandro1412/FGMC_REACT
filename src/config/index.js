import useInterceptor from "./interceptor";
import useRedux from "./redux";

const useConfig = () => {
  return { useInterceptor, useRedux };
};

export default useConfig;
