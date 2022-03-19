//Packagaes
import React from "react";
import PropTypes from "prop-types";

//Componentes
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

//Hooks
import useControllers from "../../../../controllers";

//icons
import { BiSearch } from "react-icons/bi";

const ListContract = (props) => {
  const { handleChangeScreen, screenActive } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useContracts } = useAdminControllers();
  const {
    page,
    rowsPerPage,
    optionsListContractsColumns,
    optionsListContractsRows,
    handleChangePage,
    handleChangeRowsPerPage,
    searchContracts,
    setSearchContracts,
  } = useContracts({ screenActive, handleChangeScreen });

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleChangeScreen((prevState) => ({
            ...prevState,
            view: 1,
          }));
        }}
      >
        Crear Contrato
      </Button>

      <h2 className="text-center font-bold text-2xl"> Contratos </h2>

      <div className="text-center">
        <TextField
          id="outlined-basic"
          variant="standard"
          className="block mt-5"
          helperText="Busca por tipo de contrato"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BiSearch />
              </InputAdornment>
            ),
          }}
          value={searchContracts}
          onChange={(e) => setSearchContracts(e.target.value)}
        />
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }} className="mt-10">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {optionsListContractsColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {optionsListContractsRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {optionsListContractsColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={optionsListContractsRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

ListContract.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.number.isRequired,
};

export default ListContract;
