//Packages
import axios from "axios";
import { useEffect } from "react";
import useStrings from "../../strings";

const useInterceptor = (store) => {
  const { useAuthTypes, useGeneralTypes } = useStrings();
  const { SHOW_TOAST } = useGeneralTypes();
  const { LOGOUT } = useAuthTypes();

  const handleRequestSuccess = (request) => {
    const state = store.getState();
    const { token } = state.user;

    request.headers["Content-Type"] = "application/json";
    if (token) {
      request.headers["token"] = token;
    }
    return request;
  };

  const handleResponseSuccess = (response) => {
    if (response.status === 201) {
      store.dispatch({
        type: SHOW_TOAST,
        payload: {
          state: true,
          message: response.data.response.description,
          typeMessage: "success",
        },
      });
    }
    return response;
  };

  const handleResponseError = (error) => {
    if (error.response.status === 400) {
      store.dispatch({
        type: SHOW_TOAST,
        payload: {
          state: true,
          message: error.response.data.response.err.message,
          typeMessage: "error",
        },
      });
    }

    if (error.response.status === 401) {
      store.dispatch({ type: LOGOUT });

      store.dispatch({
        type: SHOW_TOAST,
        payload: {
          status: true,
          message: "Sesión caducada",
          typeMessage: "error",
        },
      });
    }
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.interceptors.request.use(handleRequestSuccess);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useInterceptor;
