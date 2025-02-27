import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import _ from "lodash";
import { City } from "country-state-city";

//UI Componentes
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Styles
import {
  StyledDate,
  StyledForm,
  StyledTwoColumns,
} from "../../../../styles/form.styles";
import useControllers from "../../../../controllers";

const CreateContract = (props) => {
  const { handleChangeScreen, screenActive } = props;

  const [citiesOfColombian, setCitiesOfColombian] = useState();

  useEffect(() => {
    setCitiesOfColombian(City.getCitiesOfCountry("CO"));
  }, []);

  const optionsCitiesOfColombia = useMemo(
    () =>
      _.map(citiesOfColombian, (city) => ({
        label: city.name,
        value: city.name,
      })),
    [citiesOfColombian]
  );

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useContracts } = useAdminControllers();
  const { handleCreateContract, register, handleSubmit, errors } = useContracts(
    { handleChangeScreen, screenActive }
  );

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen((prevState) => ({
            ...prevState,
            view: 0,
          }));
        }}
      />

      <h2 className="text-center font-bold text-2xl"> Crear contrato </h2>

      <StyledForm>
        <TextField
          id="outlined-basic"
          label="Nombre del empleado"
          variant="standard"
          className="block w-full"
          type="text"
          error={errors["nombreEmpleado"]?.message}
          helperText={errors["nombreEmpleado"]?.message}
          required
          {...register("nombreEmpleado")}
        />
        <FormControl
          variant="standard"
          fullWidth
          error={errors["nombreContrato"]?.message}
        >
          <InputLabel id="demo-simple-select-standard-label">
            {" "}
            Selecciona el tipo de contrato
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            {...register("nombreContrato")}
            label="Tipo de contrato"
          >
            <MenuItem value="tf">Termino fijo</MenuItem>
            <MenuItem value="ps">Prestacion de servicios</MenuItem>
            <MenuItem value="ae">Agente educativo</MenuItem>
            <MenuItem value="cd">Contrato docentes</MenuItem>
          </Select>
          <FormHelperText>{errors["nombreContrato"]?.message}</FormHelperText>
        </FormControl>

        <StyledTwoColumns disabledTransition>
          <FormControl
            variant="standard"
            fullWidth
            error={errors["lugarExpedicion"]?.message}
          >
            <InputLabel id="demo-simple-select-standard-label">
              {" "}
              Selecciona el lugar de expedicion
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              {...register("lugarExpedicion")}
              label="Lugar de expeidicion"
              className="w-full"
            >
              {_.map(optionsCitiesOfColombia, (city, idx) => {
                return (
                  <MenuItem value={city.value} key={`cities-${idx}`}>
                    {city.label}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>
              {errors["lugarExpedicion"]?.message}
            </FormHelperText>
          </FormControl>

          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de nacimiento"
              variant="standard"
              className="block w-full"
              type="date"
              error={errors["fechaNacimiento"]?.message}
              helperText={errors["fechaNacimiento"]?.message}
              required
              {...register("fechaNacimiento")}
            />
          </StyledDate>
        </StyledTwoColumns>

        <StyledTwoColumns>
          <FormControl
            variant="standard"
            fullWidth
            error={errors["CajaCompensacion"]?.message}
          >
            <InputLabel id="demo-simple-select-standard-label">
              {" "}
              Selecciona caja de compensación
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              {...register("CajaCompensacion")}
              label="Fondo de pensiones"
            >
              <MenuItem value="tf">Colsubsidio</MenuItem>
              <MenuItem value="ps">Compensar</MenuItem>
              <MenuItem value="ae">Comfenalco</MenuItem>
              <MenuItem value="cd">Camacol</MenuItem>
            </Select>
            <FormHelperText>
              {errors["CajaCompensacion"]?.message}
            </FormHelperText>
          </FormControl>

          {/* <TextField
            id="outlined-basic"
            label="Caja de compensasion"
            variant="outlined"
            className="block w-full"
            error={errors["CajaCompensacion"]?.message}
            helperText={errors["CajaCompensacion"]?.message}
            required
            {...register("CajaCompensacion")}
          /> */}
          <FormControl
            variant="standard"
            fullWidth
            error={errors["afp_FondoPensiones"]?.message}
          >
            <InputLabel id="demo-simple-select-standard-label">
              {" "}
              Selecciona fondo de pensiones
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              {...register("afp_FondoPensiones")}
              label="Fondo de pensiones"
            >
              <MenuItem value="tf">Porvenir</MenuItem>
              <MenuItem value="ps">Colseguros</MenuItem>
              <MenuItem value="ae">Proteccion</MenuItem>
              <MenuItem value="cd">Comfenalco</MenuItem>
            </Select>
            <FormHelperText>
              {errors["afp_FondoPensiones"]?.message}
            </FormHelperText>
          </FormControl>
          {/*    <TextField
            id="outlined-basic"
            label="Fondo de pensiones"
            variant="outlined"
            className="block w-full"
            error={errors["afp_FondoPensiones"]?.message}
            helperText={errors["afp_FondoPensiones"]?.message}
            required
            {...register("afp_FondoPensiones")}
          /> */}
        </StyledTwoColumns>

        <FormControl
          variant="standard"
          fullWidth
          error={errors["eps"]?.message}
        >
          <InputLabel id="demo-simple-select-standard-label">
            {" "}
            Selecciona EPS
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            {...register("eps")}
            label="EPS"
          >
            <MenuItem value="tf">Nueva EPS</MenuItem>
            <MenuItem value="ps">E.P.S SANITAS</MenuItem>
            <MenuItem value="ae">E.P.S SURA</MenuItem>
            <MenuItem value="cd">SALUD TOTAL</MenuItem>
          </Select>
          <FormHelperText>{errors["eps"]?.message}</FormHelperText>
        </FormControl>

        {/*  <TextField
          id="outlined-basic"
          label="EPS"
          variant="outlined"
          className="block w-full"
          error={errors["eps"]?.message}
          helperText={errors["eps"]?.message}
          required
          {...register("eps")}
        /> */}
        <StyledTwoColumns disabledTransition>
          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de ingreso"
              variant="standard"
              className="block w-full"
              type="date"
              error={errors["fechaIngreso"]?.message}
              helperText={errors["fechaIngreso"]?.message}
              required
              {...register("fechaIngreso")}
            />
          </StyledDate>
          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de retiro"
              variant="standard"
              className="block w-full"
              type="date"
              error={errors["fechaRetiro"]?.message}
              helperText={errors["fechaRetiro"]?.message}
              required
              {...register("fechaRetiro")}
            />
          </StyledDate>
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Salario"
            variant="outlined"
            className="block w-full"
            type="number"
            error={errors["salario"]?.message}
            helperText={errors["salario"]?.message}
            required
            {...register("salario")}
          />
          <TextField
            id="outlined-basic"
            label="Auxilio por trayecto"
            variant="outlined"
            className="block w-full"
            type="number"
            error={errors["auxilioporTrayecto"]?.message}
            helperText={errors["auxilioporTrayecto"]?.message}
            required
            {...register("auxilioporTrayecto")}
          />
          <TextField
            id="outlined-basic"
            label="Auxilio por transporte"
            variant="outlined"
            className="block w-full"
            type="number"
            error={errors["auxilioporTransporte"]?.message}
            helperText={errors["auxilioporTransporte"]?.message}
            required
            {...register("auxilioporTransporte")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Cargo"
            variant="outlined"
            className="block w-full"
            error={errors["cargo"]?.message}
            helperText={errors["cargo"]?.message}
            required
            {...register("cargo")}
          />
          <TextField
            id="outlined-basic"
            label="Titilo universitario"
            variant="outlined"
            className="block w-full"
            error={errors["titulo"]?.message}
            helperText={errors["titulo"]?.message}
            required
            {...register("titulo")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Universidad"
            variant="outlined"
            className="block w-full"
            error={errors["universidad"]?.message}
            helperText={errors["universidad"]?.message}
            required
            {...register("universidad")}
          />
          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            className="block w-full"
            type="number"
            error={errors["telefono"]?.message}
            helperText={errors["telefono"]?.message}
            required
            {...register("telefono")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="outlined"
            className="block w-full"
            type="text"
            error={errors["direccion"]?.message}
            helperText={errors["direccion"]?.message}
            required
            {...register("direccion")}
          />
          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            className="block w-full"
            type="email"
            error={errors["email"]?.message}
            helperText={errors["email"]?.message}
            required
            {...register("email")}
          />
        </StyledTwoColumns>
        <TextField
          id="outlined-basic"
          label="Observaciónes"
          variant="outlined"
          className="block w-full"
          error={errors["observacion"]?.message}
          helperText={errors["observacion"]?.message}
          required
          multiline
          rows={4}
          {...register("observacion")}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-40"
          onClick={handleSubmit(handleCreateContract)}
        >
          {" "}
          Crear
        </Button>
      </StyledForm>
    </>
  );
};

CreateContract.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.number.isRequired,
};

export default CreateContract;
