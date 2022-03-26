//Packages
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";

const useDocumentManagment = ({
  screenActive = 0,
  handleChangeScreen,
} = {}) => {
  const [listOfMediaFiles, setListOfMediaFiles] = useState([]);

  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useDocumentManagmentActions } = useAdminActions();
  const { actGetAllMediaFiles, actCreateUrlForMediaFile, actUploadMediaFile } =
    useDocumentManagmentActions();

  const { useMessagesTypes, useConstants } = useStrings();
  const { ALL_SUPPORTED_FORMATS, MAX_SIZE } = useConstants();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD, FILE_TYPE, FILE_SIZE } = useFormsTypes();

  const schemaUploadFile = yup.object({
    nombreDocumento: yup.string().nullable().required(REQUIRED_FIELD),
    urlDocumento: yup.string().nullable().required(REQUIRED_FIELD),
    categoria: yup.string().nullable().required(REQUIRED_FIELD),
  });

  const schemaCreateUrlFile = yup.object({
    urlDocumento: yup
      .mixed()
      .test("fileType", FILE_TYPE, (value) => {
        if (value) {
          return ALL_SUPPORTED_FORMATS.includes(value.type);
        }
        return true;
      })
      .test("fileSize", FILE_SIZE, (value) => {
        if (value) {
          return value.size <= MAX_SIZE;
        }
        return true;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange", resolver: yupResolver(schemaUploadFile) });

  const formCreateUrl = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaCreateUrlFile),
  });

  useEffect(() => {
    if (screenActive === 0) {
      dispatch(
        actGetAllMediaFiles((res) => {
          setListOfMediaFiles(res.data.docs);
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUrlMediaFile = ({ event, onChange }) => {
    event.preventDefault();

    if (event.target.files?.[0]) {
      onChange(event.target.files[0]);
    }
    formCreateUrl.handleSubmit((data) => {
      const formData = new FormData();
      formData.append("urlDocumento", data.urlDocumento);
      dispatch(
        actCreateUrlForMediaFile({ formData }, (res) => {
          setValue("urlDocumento", res.data.urlArchivo);
        })
      );
    })();
  };

  const handleUploadMediaFile = (data) => {
    dispatch(
      actUploadMediaFile(
        {
          nombreDocumento: data.nombreDocumento,
          urlDocumento: data.urlDocumento,
        },
        () => {
          handleChangeScreen && handleChangeScreen(0);
        }
      )
    );
  };

  const handleDownloadFile = ({ url, nameFile, extension }) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${nameFile}.${extension}`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };

  return {
    handleGetUrlMediaFile,
    handleUploadMediaFile,
    listOfMediaFiles,

    //getDocumentUrl
    formCreateUrl,
    handleDownloadFile,

    //rhf
    register,
    handleSubmit,
    errors,
  };
};

export default useDocumentManagment;
