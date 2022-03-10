import useApi from "../../..";
import useStrings from "../../../../strings";

const useContractsActions = () => {
  const { useProviders } = useApi();
  const { useAdminProviders } = useProviders();
  const { useContractsProviders } = useAdminProviders();
  const { createContract } = useContractsProviders();

  const { useAdminTypes } = useStrings();
  const { useAdminContractsTypes } = useAdminTypes();
  const { CREATE_CONTRACT } = useAdminContractsTypes();

  const actCreateContract =
    (
      {
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

  return { actCreateContract };
};

export default useContractsActions;
