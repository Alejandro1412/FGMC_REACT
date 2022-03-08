//Packages
import axios from "axios";
import { useEffect, useState } from "react";

const useInterceptor = ({ store }) => {
  const [showToast, setShowToast] = useState({ message: "", type: "" });

  const handleRequestSuccess = (request) => {
    const state = store.getState();
    const { token } = state.user;

    request.headers["Content-Type"] = "application/json";
    request.headers.token = token;
    return request;
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    if (error.response.status === 400) {
      setShowToast({
        message: error.response.data.response.err.message,
        type: "error",
      });
    }
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.interceptors.request.use(handleRequestSuccess);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);

  const handleHideToast = () => setShowToast({ message: "", type: "" });

  return {
    showToast: Boolean(showToast.message),
    handleHideToast,
    toastMessage: showToast.message,
    toastType: showToast.type,
  };
};

export default useInterceptor;
