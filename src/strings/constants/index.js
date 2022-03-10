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

  return {
    ONE_DAY_IN_MILLISECONDS,
    TYPE_CONTRACTS,
    LIST_TYPE_CONTRACTS,
  };
};

export default useConstants;
