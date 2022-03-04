import React from "react";
import PropTypes from "prop-types";

//Componentes
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Icons
import { FaFileDownload } from "react-icons/fa";

const ListContract = (props) => {
  const { handleChangeScreen } = props;

  function createData(
    typeContract,
    nameEmployed,
    dateInit,
    jobTitle,
    email,
    phone
  ) {
    return {
      typeContract,
      nameEmployed,
      dateInit,
      jobTitle,
      email,
      phone,
      accion: (
        <div className="flex justify-end">
          <FaFileDownload className="cursor-pointer w-6 h-6 text-blue-400" />
        </div>
      ),
    };
  }

  const rows = [
    createData(
      "Termino fijo",
      "Alejandro",
      "Marzo 2020",
      "Aseador",
      "user@gmail.com",
      "315 324 6776"
    ),
    createData(
      "Prestacion de servicios",
      "Luis",
      "Febrero 2018",
      "Ingeniero electrico",
      "user@gmail.com",
      "315 324 6776"
    ),
    createData(
      "Termino fijo inferior a un año",
      "Vannesa",
      "Junio 2017",
      "Ingeniera de sistemas",
      "user@gmail.com",
      "315 324 6776"
    ),
    createData(
      "Agente educativo",
      "Patricio",
      "Enero 2022",
      "Plomero",
      "user@gmail.com",
      "315 324 6776"
    ),
    createData(
      "Contrato docentes",
      "Andres",
      "Diciemnbre 2020",
      "Maestro",
      "user@gmail.com",
      "315 324 6776"
    ),
  ];

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleChangeScreen(1);
        }}
      >
        Crear Contrato
      </Button>

      <h2 className="text-center font-bold text-2xl"> Contratos </h2>

      <TableContainer component={Paper} className="mt-10">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo de contrato</TableCell>
              <TableCell align="right">Nombre contratista</TableCell>
              <TableCell align="right">Fecha de ingreso</TableCell>
              <TableCell align="right">Cargo</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Teléfono</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.typeContract}
                </TableCell>
                <TableCell align="right">{row.nameEmployed}</TableCell>
                <TableCell align="right">{row.dateInit}</TableCell>
                <TableCell align="right">{row.jobTitle}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.accion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

ListContract.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default ListContract;
