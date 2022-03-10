//Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useHelpers from "../../../../helpers";

const useContracts = ({ handleChangeScreen }) => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useContractsActions } = useAdminActions();
  const { actCreateContract } = useContractsActions();

  const { useMessagesTypes, useConstants } = useStrings();
  const { LIST_TYPE_CONTRACTS } = useConstants();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD, EMAIL_NOT_VALID } = useFormsTypes();

  const { useQuickFunctions } = useHelpers();
  const { getYearMonthDayFromDate } = useQuickFunctions();

  const schemaArtistPartner = yup.object({
    nombreContrato: yup.string().nullable().required(REQUIRED_FIELD),
    lugarExpedicion: yup.string().nullable().required(REQUIRED_FIELD),
    fechaNacimiento: yup.string().nullable().required(REQUIRED_FIELD),
    CajaCompensacion: yup.string().nullable().required(REQUIRED_FIELD),
    afp_FondoPensiones: yup.string().nullable().required(REQUIRED_FIELD),
    eps: yup.string().nullable().required(REQUIRED_FIELD),
    fechaIngreso: yup.string().nullable().required(REQUIRED_FIELD),
    fechaRetiro: yup.string().nullable().required(REQUIRED_FIELD),
    salario: yup
      .number()
      .nullable()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    auxilioporTrayecto: yup
      .number()
      .nullable()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    auxilioporTransporte: yup
      .number()
      .nullable()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    cargo: yup.string().nullable().required(REQUIRED_FIELD),
    titulo: yup.string().nullable().required(REQUIRED_FIELD),
    universidad: yup.string().nullable().required(REQUIRED_FIELD),
    telefono: yup
      .number()
      .nullable()
      .required(REQUIRED_FIELD)
      .typeError(REQUIRED_FIELD),
    direccion: yup.string().nullable().required(REQUIRED_FIELD),
    email: yup
      .string()
      .email(EMAIL_NOT_VALID)
      .nullable()
      .required(REQUIRED_FIELD),
    observacion: yup.string().nullable().required(REQUIRED_FIELD),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaArtistPartner),
    mode: "onChange",
  });

  const handleCreateContract = (data) => {
    const dateAux = getYearMonthDayFromDate({
      dateInString: data.fechaNacimiento,
      format: "dmy2",
    });
    const dateAuxIngreso = getYearMonthDayFromDate({
      dateInString: data.fechaIngreso,
      format: "dmy2",
    });
    const dateAuxSalida = getYearMonthDayFromDate({
      dateInString: data.fechaRetiro,
      format: "dmy2",
    });
    dispatch(
      actCreateContract(
        {
          ...data,
          fechaNacimiento: dateAux,
          fechaIngreso: dateAuxIngreso,
          fechaRetiro: dateAuxSalida,
        },
        () => {
          handleChangeScreen(0);
        }
      )
    );
  };

  return {
    LIST_TYPE_CONTRACTS,
    handleCreateContract,

    //rhf
    control,
    register,
    handleSubmit,
    errors,
  };
};

export default useContracts;
