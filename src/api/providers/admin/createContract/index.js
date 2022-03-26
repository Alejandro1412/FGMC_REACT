import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useContractsProviders = () => {
  const createContract = ({
    nombreEmpleado,
    nombreContrato,
    lugarExpedicion,
    fechaNacimiento,
    CajaCompensacion,
    afp_FondoPensiones,
    fechaIngreso,
    fechaRetiro,
    auxilioporTrayecto,
    auxilioporTransporte,
    cargo,
    titulo,
    universidad,
    telefono,
    direccion,
    email,
    observacion,
    eps,
    salario,
  }) => {
    const res = axios({
      method: "POST",
      url: "/contrato",
      data: {
        nombreEmpleado,
        nombreContrato,
        lugarExpedicion,
        fechaNacimiento,
        CajaCompensacion,
        afp_FondoPensiones,
        fechaIngreso,
        fechaRetiro,
        auxilioporTrayecto,
        auxilioporTransporte,
        cargo,
        titulo,
        universidad,
        telefono,
        direccion,
        email,
        observacion,
        eps,
        salario,
      },
    });

    return trackPromise(res);
  };

  const getContracts = () => {
    const res = axios({
      method: "GET",
      url: "/contratos",
    });

    return trackPromise(res);
  };

  return { createContract, getContracts };
};

export default useContractsProviders;
