import useComponentHooks from "./componentHooks";
import useGeneralHooks from "./generalHooks";
import useRoutesHooks from "./routesHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return { useScreenHooks, useGeneralHooks, useRoutesHooks, useComponentHooks };
};

export default useControllers;
