import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useContractsProviders = () => {
  const createContract = ({
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

  return { createContract };
};

export default useContractsProviders;
