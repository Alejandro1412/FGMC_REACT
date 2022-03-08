import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useContractsProviders = () => {
  const createContract = ({ nombreContrato }) => {
    const res = axios({
      method: "POST",
      url: "/contrato",
      data: {
        nombreContrato,
      },
    });

    return trackPromise(res);
  };

  return { createContract };
};

export default useContractsProviders;
