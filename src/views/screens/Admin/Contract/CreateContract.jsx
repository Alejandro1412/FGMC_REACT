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
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Correo"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Correo"
          variant="outlined"
          className="block"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <TextField
          id="outlined-basic"
          label="Correo"
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
