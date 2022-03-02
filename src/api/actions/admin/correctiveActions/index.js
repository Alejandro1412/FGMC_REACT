import useApi from "../../..";
import useStrings from "../../../../strings";

const useAdminCorrectiveActions = () => {
  const { useProviders } = useApi();
  const { useAdminProviders } = useProviders();
  const { useAdminCorrectiveActionsProviders } = useAdminProviders();
  const { createCorrectiveAction, getCorrectiveActions } =
    useAdminCorrectiveActionsProviders();

  const { useAdminTypes } = useStrings();
  const { useAdminCorrectiveActionsTypes } = useAdminTypes();
  const { CREATE_CORRECTIVE_ACTIONS, GET_CORRECTIVE_ACTIONS } =
    useAdminCorrectiveActionsTypes();

  const actGetCorrectiveActions = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await getCorrectiveActions();
      dispatch({ type: GET_CORRECTIVE_ACTIONS });
      onSuccess && onSuccess({ listCorrectiveActions: res.data });
    } catch (error) {
      onError && onError(error);
    }
  };

  const actCreateCorrectiveAction =
    (
      {
        responsable,
        gravedad,
        descripcionProblema,
        descripcionMejora,
        fechaSolucion,
      },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const res = await createCorrectiveAction({
          responsable,
          gravedad,
          descripcionProblema,
          descripcionMejora,
          fechaSolucion,
        });
        dispatch({ type: CREATE_CORRECTIVE_ACTIONS });
        onSuccess && onSuccess(res);
      } catch (error) {
        onError && onError();
      }
    };

  return { actGetCorrectiveActions, actCreateCorrectiveAction };
};

export default useAdminCorrectiveActions;
