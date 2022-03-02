import _ from "lodash";
import { useEffect, useMemo, useState } from "react";

//Hooks
import useApi from "../../../../api";

const useAdminCorrectiveActionsController = () => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useAdminCorrectiveActions } = useAdminActions();
  const { actGetCorrectiveActions } = useAdminCorrectiveActions();

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

  useEffect(() => {
    dispatch(
      actGetCorrectiveActions(({ listCorrectiveActions }) => {
        setOptionsCorrectiveActions(listCorrectiveActions.docs);
      })
    );
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

  return {
    optionsCorrectiveActionsColumns,
    optionsCorrectiveActionsRows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default useAdminCorrectiveActionsController;
