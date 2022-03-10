import useStrings from "../../../strings";

const useGeneralActions = () => {
  const { useGeneralTypes } = useStrings();
  const { SHOW_TOAST, HIDE_TOAST } = useGeneralTypes();

  const actShowGeneralToast =
    ({ message, typeMessage }) =>
    (dispatch) => {
      dispatch({ type: SHOW_TOAST, payload: { message, typeMessage } });
    };

  const actHideGeneralToast = () => (dispatch) => {
    dispatch({ type: HIDE_TOAST });
  };

  return { actShowGeneralToast, actHideGeneralToast };
};

export default useGeneralActions;
