import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useAdminCorrectiveActionsProviders = () => {
  const getCorrectiveActions = () => {
    const res = axios({
      method: "GET",
      url: "/acciones_correctivas",
    });

    return trackPromise(res);
  };

  const createCorrectiveAction = ({
    responsable,
    gravedad,
    descripcionProblema,
    descripcionMejora,
    fechaSolucion,
  }) => {
    const res = axios({
      method: "POST",
      url: "/accion_correctiva",
      data: {
        responsable,
        gravedad,
        descripcionProblema,
        descripcionMejora,
        fechaSolucion,
      },
    });

    return trackPromise(res);
  };

  return { createCorrectiveAction, getCorrectiveActions };
};

export default useAdminCorrectiveActionsProviders;
