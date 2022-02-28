import React from "react";
import PropTypes from "prop-types";

//UI Componentes
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

const CreateContract = (props) => {
  const { handleChangeScreen } = props;

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen(0);
        }}
      />

      <h2 className="text-center font-bold text-2xl"> Crear contrato </h2>

      <form className="flex flex-col justify-center mt-10 space-y-4">
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            {" "}
            Selecciona el tipo de contrato
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={age}
            //   onChange={handleChange}
            label="Tipo de contrato"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="tf">Termino fijo</MenuItem>
            <MenuItem value="ps">Prestacion de servicios</MenuItem>
            <MenuItem value="ps">Termino fijo inferior a un año</MenuItem>
            <MenuItem value="ps">Agente educativo</MenuItem>
            <MenuItem value="ps">Contrato docentes</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Lugar de Expedicion"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Fecha de nacimiento"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Caja de compensasion"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Fondo de pensiones"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="EPS"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Fecha de ingreso"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Fecha de retiro"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Salario"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Auxilio por trayecto"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Auxilio por transporte"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Cargo"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Titilo universitario"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Universidad"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Dirección"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="E-Mail"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Observaciónes"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
      </form>
    </>
  );
};

CreateContract.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default CreateContract;
