//Packages
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useDocumentManagmentProviders = () => {
  const uploadMediaFile = ({ nombreDocumento, urlDocumento, categoria }) => {
    const res = axios({
      method: "POST",
      url: "/documento",
      data: { nombreDocumento, urlDocumento, categoria },
    });

    return trackPromise(res);
  };

  const createUrlForMediaFile = ({ formData }) => {
    const res = axios({
      method: "POST",
      url: "/subirDoc",
      data: formData,
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
