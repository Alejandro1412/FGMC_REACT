//Packages
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _ from "lodash";
import dayjs from "dayjs";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";

//Assets
import CardTop from "../../../../assets/images/card-top.jpg";

//Assets
import { BiDownload } from "react-icons/bi";

const useDocumentManagment = ({
  screenActive = 0,
  handleChangeScreen,
  categorySelected,
} = {}) => {
  const [listOfMediaFiles, setListOfMediaFiles] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const CATEGORIAS = [
    {
      name: "Mision - vision",
      id: "ms",
      imagen: CardTop,
    },
    {
      name: "Requerimientos",
      id: "re",
      imagen: CardTop,
    },
    {
      name: "Seguridad en el trabajo",
      id: "se",
      imagen: CardTop,
    },
    {
      name: "Formatos institucionales",
      id: "fi",
      imagen: CardTop,
    },
    {
      name: "Otros",
      id: "otros",
      imagen: CardTop,
    },
  ];

  const optionsFilesByCategoryColumns = [
    { id: "nombreDocumento", label: "Nombre documento", minWidth: 170 },
    {
      id: "createdAt",
      label: "Fecha creacion",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "accion",
      label: "Acciones",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const optionsFilesByCategoryRows = useMemo(() => {
    if (listOfMediaFiles.length > 0) {
      const response = _.map(listOfMediaFiles, (correctiveA) => {
        const { nombreDocumento, createdAt, categoria, urlDocumento } =
          correctiveA;
        const dateInJs = new Date(createdAt);
        const dayFormated = dayjs(dateInJs);
        return {
          nombreDocumento,
          createdAt: dayFormated.format("MMM DD YYYY"),
          categoria,
          accion: (
            <div className="flex justify-end">
              <BiDownload
                className="w-8 h-8 cursor-pointer "
                onClick={() => {
                  handleDownloadFile({
                    url: urlDocumento,
                    nameFile: nombreDocumento.split(" ").join(""),
                    extension: urlDocumento.split(".")[1],
                  });
                }}
              />
            </div>
          ),
        };
      }).filter((file) => file.categoria === categorySelected);

      return response;
    }

    return [];
  }, [listOfMediaFiles, categorySelected]);

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
          categoria: data.categoria,
        },
        () => {
          handleChangeScreen &&
            handleChangeScreen((prevState) => ({ ...prevState, view: 0 }));
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

  const handleGoToCategory = (data) => {
    handleChangeScreen({ data, view: 2 });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
    CATEGORIAS,
    handleGoToCategory,

    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    optionsFilesByCategoryColumns,
    optionsFilesByCategoryRows,
  };
};

export default useDocumentManagment;
