import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";
import useHelpers from "../../../../helpers";

const useAdminCorrectiveActionsController = ({
  screenActive = 0,
  handleChangeScreen,
} = {}) => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useAdminCorrectiveActions } = useAdminActions();
  const { actGetCorrectiveActions, actCreateCorrectiveAction } =
    useAdminCorrectiveActions();

  const { useQuickFunctions } = useHelpers();
  const { getYearMonthDayFromDate } = useQuickFunctions();

  const [optionsCorrectiveActions, setOptionsCorrectiveActions] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const optionsCorrectiveActionsColumns = [
    { id: "gravedad", label: "Gravedad", minWidth: 170 },
    {
      id: "descripcionProblema",
      label: "Descripcion problema",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "descripcionMejora",
      label: "Descripcion mejora",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "responsable",
      label: "Responsable",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "fechaSolucion",
      label: "Fecha solucion",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const { useMessagesTypes } = useStrings();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD } = useFormsTypes();

  const createCorrectiveActionSchema = yup
    .object({
      fechaSolucion: yup
        .date()
        .required(REQUIRED_FIELD)
        .transform((curr, orig) => (orig === "" ? null : curr))
        .nullable(),
      descripcionProblema: yup.string().required(REQUIRED_FIELD),
      descripcionMejora: yup.string().required(REQUIRED_FIELD),
      responsable: yup.string().required(REQUIRED_FIELD),
      gravedad: yup.string().required(REQUIRED_FIELD),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    register,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createCorrectiveActionSchema),
  });

  useEffect(() => {
    if (screenActive === 0) {
      dispatch(
        actGetCorrectiveActions(({ listCorrectiveActions }) => {
          setOptionsCorrectiveActions(listCorrectiveActions.docs);
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const optionsCorrectiveActionsRows = useMemo(() => {
    if (optionsCorrectiveActions.length > 0) {
      const response = _.map(optionsCorrectiveActions, (correctiveA) => {
        const {
          _id,
          descripcionProblema,
          descripcionMejora,
          responsable,
          fechaSolucion,
          gravedad,
        } = correctiveA;
        return {
          id: _id,
          gravedad,
          descripcionProblema,
          descripcionMejora,
          responsable,
          fechaSolucion,
        };
      });

      return response;
    }

    return [];
  }, [optionsCorrectiveActions]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRegisterCorrectiveActions = (data) => {
    const {
      responsable,
      gravedad,
      descripcionProblema,
      descripcionMejora,
      fechaSolucion,
    } = data;

    const fechaSolucionAux = getYearMonthDayFromDate({
      dateInString: fechaSolucion,
      format: "ymd",
    });

    dispatch(
      actCreateCorrectiveAction(
        {
          responsable,
          gravedad,
          descripcionProblema,
          descripcionMejora,
          fechaSolucion: fechaSolucionAux,
        },
        () => {
          handleChangeScreen(0);
        }
      )
    );
  };

  return {
    optionsCorrectiveActionsColumns,
    optionsCorrectiveActionsRows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRegisterCorrectiveActions,

    //react hook form
    register,
    handleSubmit,
    errors,
    watch,
    control,
  };
};

export default useAdminCorrectiveActionsController;
