import useApi from "../../..";
import useStrings from "../../../../strings";

const useContractsActions = () => {
  const { useProviders } = useApi();
  const { useAdminProviders } = useProviders();
  const { useContractsProviders } = useAdminProviders();
  const { createContract, getContracts } = useContractsProviders();

  const { useAdminTypes } = useStrings();
  const { useAdminContractsTypes } = useAdminTypes();
  const { CREATE_CONTRACT, GET_CONTRACT } = useAdminContractsTypes();

  const actCreateContract =
    (
      {
        nombreEmpleado,
        nombreContrato,
        lugarExpedicion,
        fechaNacimiento,
        CajaCompensacion,
        afp_FondoPensiones,
        fechaIngreso,
        fechaRetiro,
        auxilioporTrayecto,
        auxilioporTransporte,
        cargo,
        titulo,
        universidad,
        telefono,
        direccion,
        email,
        observacion,
        eps,
        salario,
      },
      onSuccess,
      onError
    ) =>
    async (dispatch) => {
      try {
        const res = await createContract({
          nombreEmpleado,
          nombreContrato,
          lugarExpedicion,
          fechaNacimiento,
          CajaCompensacion,
          afp_FondoPensiones,
          fechaIngreso,
          fechaRetiro,
          auxilioporTrayecto,
          auxilioporTransporte,
          cargo,
          titulo,
          universidad,
          telefono,
          direccion,
          email,
          observacion,
          eps,
          salario,
        });
        dispatch({ type: CREATE_CONTRACT });
        onSuccess && onSuccess(res);
      } catch (error) {
        onError && onError();
      }
    };

  const actGetContracts = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await getContracts();
      dispatch({ type: GET_CONTRACT });
      onSuccess && onSuccess({ listContracts: res.data.responseDetail });
    } catch (error) {
      onError && onError(error);
    }
  };

  return { actCreateContract, actGetContracts };
};

export default useContractsActions;
