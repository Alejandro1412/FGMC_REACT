//Packages
import React from "react";

//Assets
import LogoFgmc from "../../../assets/images/logo.png";

//UI components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center uppercase">
        Gimnasio Moderno del Cauca
      </h1>

      <div className="max-w-6xl rounded shadow-2xl mt-10 flex flex-col lg:flex-row justify-center px-5 py-10 lg:space-x-9">
        <div className="mx-auto">
          <img
            src={LogoFgmc}
            alt="Fundación gimnasio moderno del cauca"
            className="w-60 h-60"
          />
        </div>
        <div className="flex flex-col justify-center lg:items-center mt-10 space-y-1.5">
          <h2 className="text-center text-xl mb-3">Ingresa tu usuario</h2>
          <TextField id="outlined-basic" label="Correo" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
          />
          <Button variant="contained"> Iniciar sesión </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
