//Packages
import axios from "axios";
import { useEffect } from "react";

const useInterceptor = () => {
  const handleRequestSuccess = (request) => {
    request.headers["Content-Type"] = "application/json";
    return request;
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.interceptors.request.use(handleRequestSuccess);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);

  return {};
};

export default useInterceptor;
