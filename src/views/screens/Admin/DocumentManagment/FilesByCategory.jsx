//Packages
import React from "react";
import PropTypes from "prop-types";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
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

const FilesByCategory = (props) => {
  const { handleChangeScreen, screenActive } = props;
  const { name: categoryName, id } = screenActive.data;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useDocumentManagment } = useAdminControllers();
  const {
    optionsFilesByCategoryRows,
    optionsFilesByCategoryColumns,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useDocumentManagment({
    handleChangeScreen,
    categorySelected: id,
  });

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen((prevState) => ({ ...prevState, view: 0 }));
        }}
      />

      <h2 className="text-center font-bold text-2xl">
        {" "}
        Categoria: <span className="underline">{categoryName}</span>{" "}
      </h2>

      <Paper sx={{ width: "100%", overflow: "hidden" }} className="mt-10">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {optionsFilesByCategoryColumns.map((column) => (
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
              {optionsFilesByCategoryRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {optionsFilesByCategoryColumns.map((column) => {
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
          count={optionsFilesByCategoryRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

FilesByCategory.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.number.isRequired,
};

export default FilesByCategory;
