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
  const { handleChangeScreen } = props;

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
  const { handleCreateContract } = useContracts();

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen(0);
        }}
      />

      <h2 className="text-center font-bold text-2xl"> Crear contrato </h2>

      <StyledForm>
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
            <MenuItem value="tf">Termino fijo</MenuItem>
            <MenuItem value="ps">Prestacion de servicios</MenuItem>
            <MenuItem value="ps">Termino fijo inferior a un año</MenuItem>
            <MenuItem value="ps">Agente educativo</MenuItem>
            <MenuItem value="ps">Contrato docentes</MenuItem>
          </Select>
        </FormControl>

        <StyledTwoColumns disabledTransition>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              {" "}
              Selecciona el lugar de expedicion
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              //   value={age}
              //   onChange={handleChange}
              label="Lugar de expeidicion"
              className="w-full"
            >
              {_.map(optionsCitiesOfColombia, (city) => {
                return <MenuItem value={city.value}>{city.label}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de expedicion"
              variant="standard"
              className="block w-full"
              type="date"
              // error={errors["email"]?.message}
              // helperText={errors["email"]?.message}
              required
              // {...register("email")}
            />
          </StyledDate>
        </StyledTwoColumns>

        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Caja de compensasion"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Fondo de pensiones"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
        </StyledTwoColumns>
        <TextField
          id="outlined-basic"
          label="EPS"
          variant="outlined"
          className="block w-full"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <StyledTwoColumns disabledTransition>
          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de ingreso"
              variant="standard"
              className="block w-full"
              type="date"
              // error={errors["email"]?.message}
              // helperText={errors["email"]?.message}
              required
              // {...register("email")}
            />
          </StyledDate>
          <StyledDate>
            <TextField
              id="outlined-basic"
              label="Fecha de retiro"
              variant="standard"
              className="block w-full"
              type="date"
              // error={errors["email"]?.message}
              // helperText={errors["email"]?.message}
              required
              // {...register("email")}
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
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Auxilio por trayecto"
            variant="outlined"
            className="block w-full"
            type="number"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Auxilio por transporte"
            variant="outlined"
            className="block w-full"
            type="number"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Cargo"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Titilo universitario"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Universidad"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            className="block w-full"
            type="number"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
        </StyledTwoColumns>
        <StyledTwoColumns>
          <TextField
            id="outlined-basic"
            label="Dirección"
            variant="outlined"
            className="block w-full"
            type="email"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            className="block w-full"
            // error={errors["email"]?.message}
            // helperText={errors["email"]?.message}
            required
            // {...register("email")}
          />
        </StyledTwoColumns>
        <TextField
          id="outlined-basic"
          label="Observaciónes"
          variant="outlined"
          className="block w-full"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          multiline
          rows={4}
          // {...register("email")}
        />
        <Button
          variant="contained"
          className="w-40"
          onClick={handleCreateContract}
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
};

export default CreateContract;
