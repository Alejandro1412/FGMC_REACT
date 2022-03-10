//Packages
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _ from "lodash";
import dayjs from "dayjs";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useHelpers from "../../../../helpers";

//Icons
import { FaFileDownload } from "react-icons/fa";

const useContracts = ({ screenActive = 0, handleChangeScreen }) => {
  const [listContracts, setListContracts] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { useMessagesTypes, useConstants } = useStrings();
  const { LIST_TYPE_CONTRACTS, TYPE_CONTRACTS } = useConstants();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD, EMAIL_NOT_VALID } = useFormsTypes();

  const optionsListContractsColumns = [
    { id: "nombreContrato", label: "Tipo de contrato", minWidth: 150 },
    {
      id: "fechaIngreso",
      label: "Fecha de ingreso",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "cargo",
      label: "Cargo",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "telefono",
      label: "Teléfono",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "accion",
      label: "Acciones",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const optionsListContractsRows = useMemo(() => {
    if (listContracts.length > 0) {
      const response = _.map(listContracts, (correctiveA) => {
        const { _id, nombreContrato, fechaIngreso, cargo, email, telefono } =
          correctiveA;
        const dateInJsFechaIngreso = new Date(fechaIngreso);
        return {
          id: _id,
          nombreContrato: TYPE_CONTRACTS[nombreContrato],
          fechaIngreso: dayjs(dateInJsFechaIngreso).format("MMM DD YYYY"),
          cargo,
          email,
          telefono: telefono.toString(),
          accion: (
            <div className="flex justify-end">
              <FaFileDownload className="cursor-pointer w-6 h-6 text-blue-400" />
            </div>
          ),
        };
      });

      return response;
    }

    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listContracts]);

  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useContractsActions } = useAdminActions();
  const { actCreateContract, actGetContracts } = useContractsActions();

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

  useEffect(() => {
    screenActive === 0 &&
      dispatch(
        actGetContracts(({ listContracts }) => {
          setListContracts(listContracts);
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return {
    LIST_TYPE_CONTRACTS,
    handleCreateContract,

    //rhf
    control,
    register,
    handleSubmit,
    errors,

    //table
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    optionsListContractsColumns,
    optionsListContractsRows,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default useContracts;
