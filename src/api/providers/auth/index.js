import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useAuthProviders = () => {
  const login = ({ email, password }) => {
    const res = axios({
      method: "POST",
      url: "/login",
      data: { email, password },
    });

    return trackPromise(res);
  };

  return { login };
};

export default useAuthProviders;
