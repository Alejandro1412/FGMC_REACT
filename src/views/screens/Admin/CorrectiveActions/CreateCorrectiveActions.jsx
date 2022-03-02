import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useStrings from "../../../../strings";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Styles
import {
  StyledDate,
  StyledForm,
  StyledTwoColumns,
} from "../../../../styles/form.styles";

//Components
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const CreateCorrectiveActions = (props) => {
  const { handleChangeScreen } = props;

  const { useMessagesTypes } = useStrings();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD } = useFormsTypes();

  const createCorrectiveActionSchema = yup
    .object({
      date: yup
        .date()
        .required(REQUIRED_FIELD)
        .transform((curr, orig) => (orig === "" ? null : curr))
        .nullable(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createCorrectiveActionSchema),
  });

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen(0);
        }}
      />

      <h2 className="text-center font-bold text-2xl">
        {" "}
        Crear acciones correctivas{" "}
      </h2>

      <StyledForm>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            {" "}
            Selecciona el responsable
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={age}
            //   onChange={handleChange}
            label="Tipo de contrato"
          >
            <MenuItem value="alta">Alejandro</MenuItem>
            <MenuItem value="media">Luisa</MenuItem>
            <MenuItem value="baja">Andres</MenuItem>
            <MenuItem value="baja2">Daniela</MenuItem>
            <MenuItem value="baja3">Manuela</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            {" "}
            Selecciona la gravedad
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            //   value={age}
            //   onChange={handleChange}
            label="Tipo de contrato"
          >
            <MenuItem value="alta">Alta</MenuItem>
            <MenuItem value="media">Media</MenuItem>
            <MenuItem value="baja">Baja</MenuItem>
          </Select>
        </FormControl>

        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Describe el problema"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            multiline
            rows={4}
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Describe la accion de mejora"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            multiline
            rows={4}
            // {...register("email")}
          />
        </StyledTwoColumns>

        <StyledDate hasValue={watch("date")}>
          <TextField
            id="outlined-basic"
            label="Fecha de solucion"
            variant="standard"
            className="w-full"
            type="date"
            error={errors["date"]?.message}
            helperText={errors["date"]?.message}
            required
            {...register("date")}
          />
        </StyledDate>

        <Button
          variant="contained"
          className="w-40"
          onClick={handleSubmit(() => {})}
        >
          {" "}
          Crear accion correctiva
        </Button>
      </StyledForm>
    </>
  );
};

CreateCorrectiveActions.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default CreateCorrectiveActions;
