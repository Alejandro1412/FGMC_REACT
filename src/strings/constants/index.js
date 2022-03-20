const useConstants = () => {
  const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

  const TYPE_CONTRACTS = {
    tf: "Termino fijo",
    ps: "Prestacion de servicios",
    ae: "Agente educativo",
    cd: "Contrato docentes",
  };

  const LIST_TYPE_CONTRACTS = [
    { value: "tf", label: "Termino fijo" },
    { value: "ps", label: "Prestacion de servicios" },
    { value: "ae", label: "Agente educativo" },
    { value: "cd", label: "Contrato docentes" },
  ];

  const ALL_SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "video/mp4",
    "video/quicktime",
    "video/ogg",
    "application/pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const MAX_SIZE = 5000000; //Esto está en Bytes

  return {
    ONE_DAY_IN_MILLISECONDS,
    TYPE_CONTRACTS,
    LIST_TYPE_CONTRACTS,
    ALL_SUPPORTED_FORMATS,
    MAX_SIZE,
  };
};

export default useConstants;
