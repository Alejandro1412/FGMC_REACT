//Hooks
import useGeneralInitialStates from "./general";
import useUserInitialStates from "./user";

const useInitialStates = () => {
  return { useUserInitialStates, useGeneralInitialStates };
};

export default useInitialStates;
