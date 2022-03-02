import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

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
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "@mui/material";

//Hooks
import useControllers from "../../../../controllers";

const CreateCorrectiveActions = (props) => {
  const { handleChangeScreen, screenActive } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useAdminCorrectiveActionsController } = useAdminControllers();
  const {
    register,
    handleSubmit,
    errors,
    watch,
    control,
    handleRegisterCorrectiveActions,
  } = useAdminCorrectiveActionsController({
    screenActive,
    handleChangeScreen,
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
        <Controller
          control={control}
          name="responsable"
          render={({ field: { onChange, value, name } }) => {
            return (
              <FormControl
                variant="standard"
                fullWidth
                error={errors["responsable"]?.message}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  {" "}
                  Selecciona el responsable
                </InputLabel>
                <Select
                  name={name}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Tipo de contrato"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value="alejandro">Alejandro</MenuItem>
                  <MenuItem value="luisa">Luisa</MenuItem>
                  <MenuItem value="andres">Andres</MenuItem>
                  <MenuItem value="daniela">Daniela</MenuItem>
                  <MenuItem value="manuela">Manuela</MenuItem>
                </Select>
                <FormHelperText>
                  {errors["responsable"]?.message}
                </FormHelperText>
              </FormControl>
            );
          }}
        />

        <Controller
          control={control}
          name="gravedad"
          render={({ field: { onChange, value, name } }) => {
            return (
              <FormControl
                variant="standard"
                fullWidth
                error={errors["gravedad"]?.message}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  {" "}
                  Selecciona el responsable
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Tipo de contrato"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value="alta">Alta</MenuItem>
                  <MenuItem value="media">Media</MenuItem>
                  <MenuItem value="baja">Baja</MenuItem>
                </Select>
                <FormHelperText>{errors["gravedad"]?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />

        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Describe el problema"
            variant="outlined"
            className="block w-full"
            error={errors?.["descripcionProblema"]?.message}
            helperText={errors?.["descripcionProblema"]?.message}
            required
            multiline
            rows={4}
            {...register("descripcionProblema")}
          />
          <TextField
            id="outlined-basic"
            label="Describe la accion de mejora"
            variant="outlined"
            className="block w-full"
            error={errors?.["descripcionMejora"]?.message}
            helperText={errors?.["descripcionMejora"]?.message}
            required
            multiline
            rows={4}
            {...register("descripcionMejora")}
          />
        </StyledTwoColumns>

        <StyledDate hasValue={watch("date")}>
          <TextField
            id="outlined-basic"
            label="Fecha de solucion"
            variant="standard"
            className="w-full"
            type="date"
            error={errors?.["fechaSolucion"]?.message}
            helperText={errors?.["fechaSolucion"]?.message}
            required
            {...register("fechaSolucion")}
          />
        </StyledDate>

        <Button
          variant="contained"
          className="w-40"
          onClick={handleSubmit(handleRegisterCorrectiveActions)}
        >
          Crear accion correctiva
        </Button>
      </StyledForm>
    </>
  );
};

CreateCorrectiveActions.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.number.isRequired,
};

export default CreateCorrectiveActions;
