import _ from "lodash";
import { useEffect, useMemo, useState } from "react";

//Hooks
import useApi from "../../../../api";

const useBatteryIndicators = () => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useAdminCorrectiveActions } = useAdminActions();
  const { actGetCorrectiveActions } = useAdminCorrectiveActions();

  const [optionsCorrectiveActions, setOptionsCorrectiveActions] = useState([]);

  const dataCorrectiveActions = useMemo(() => {
    const data = [];
    if (optionsCorrectiveActions.length > 0) {
      const actionsHigh = _.filter(
        optionsCorrectiveActions,
        (correctiveA) => correctiveA.gravedad === "alta"
      );
      const actionsMedium = _.filter(
        optionsCorrectiveActions,
        (correctiveA) => correctiveA.gravedad === "media"
      );
      const actionsLow = _.filter(
        optionsCorrectiveActions,
        (correctiveA) => correctiveA.gravedad === "baja"
      );

      data.push(["Task", "Hours per Day"]);

      if (Array.isArray(actionsHigh)) {
        data.push(["Alta", actionsHigh.length]);
      }
      if (Array.isArray(actionsMedium)) {
        data.push(["Media", actionsMedium.length]);
      }
      if (Array.isArray(actionsLow)) {
        data.push(["Baja", actionsLow.length]);
      }
      return data;
    }

    return data;
  }, [optionsCorrectiveActions]);

  const optionsChartCorrectiveActions = {
    title: "Estadisticas Acciones correctivas",
    pieHole: 0.4,
    is3D: false,
  };

  useEffect(() => {
    dispatch(
      actGetCorrectiveActions(({ listCorrectiveActions }) => {
        setOptionsCorrectiveActions(listCorrectiveActions.docs);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { dataCorrectiveActions, optionsChartCorrectiveActions };
};

export default useBatteryIndicators;
