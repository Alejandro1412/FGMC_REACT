import useGeneralHooks from "./generalHooks";
import useRoutesHooks from "./routesHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return { useScreenHooks, useGeneralHooks, useRoutesHooks };
};

export default useControllers;
