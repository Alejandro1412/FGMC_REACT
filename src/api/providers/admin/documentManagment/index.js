//Packages
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useDocumentManagmentProviders = () => {
  const createUrlForMediaFile = ({ formData }) => {
    const res = axios({
      method: "POST",
      url: "/documento",
      data: formData,
    });

    return trackPromise(res);
  };

  const uploadMediaFile = ({ nombreDocumento, urlDocumento }) => {
    const res = axios({
      method: "POST",
      url: "/subirDoc",
      data: { nombreDocumento, urlDocumento },
    });

    return trackPromise(res);
  };

  const getAllMediaFiles = () => {
    const res = axios({
      method: "GET",
      url: "/documentos",
    });

    return trackPromise(res);
  };
  return { createUrlForMediaFile, uploadMediaFile, getAllMediaFiles };
};

export default useDocumentManagmentProviders;
