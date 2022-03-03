import _ from "lodash";
import { useEffect, useMemo, useState } from "react";

//Hooks
import useApi from "../../../../api";
import useHelpers from "../../../../helpers";

const useAdminHome = () => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useAdminCorrectiveActions } = useAdminActions();
  const { actGetCorrectiveActions } = useAdminCorrectiveActions();

  const { useQuickFunctions } = useHelpers();
  const { daysToDateExpired } = useQuickFunctions();

  const [optionsCorrectiveActions, setOptionsCorrectiveActions] = useState([]);

  const optionsNearCorrectiveActions = useMemo(() => {
    const correctiveActions = _.map(optionsCorrectiveActions, (correctiveA) => {
      const daysResponse = daysToDateExpired({
        selectedDate: new Date(correctiveA.fechaSolucion),
      });

      return {
        ...correctiveA,
        isNearExpired: daysResponse > 0 && daysResponse <= 15,
        isNotNearToExpired: daysResponse > 0 && daysResponse > 15,
        isExpired: daysResponse < 0,
        daysToExpired: Math.ceil(daysResponse),
      };
    }).filter((correctiveAction) => correctiveAction.isNearExpired);
    return correctiveActions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsCorrectiveActions]);

  useEffect(() => {
    dispatch(
      actGetCorrectiveActions(({ listCorrectiveActions }) => {
        setOptionsCorrectiveActions(listCorrectiveActions.docs);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { optionsNearCorrectiveActions };
};

export default useAdminHome;
