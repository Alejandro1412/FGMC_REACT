import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useGeneralReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useGeneralInitialStates } = useInitialStates();
  const { initialStateGeneralToast } = useGeneralInitialStates();

  const { useGeneralTypes, useAuthTypes } = useStrings();
  const { LOGOUT } = useAuthTypes();
  const { SHOW_TOAST, HIDE_TOAST } = useGeneralTypes();

  const generalToast = createReducer(initialStateGeneralToast, {
    [SHOW_TOAST](state, action) {
      const { message, typeMessage } = action.payload;
      return { message, typeMessage, state: true };
    },
    [HIDE_TOAST](state, action) {
      return initialStateGeneralToast;
    },
    [LOGOUT]() {
      return initialStateGeneralToast;
    },
  });

  return { generalToast };
};

export default useGeneralReducers;
