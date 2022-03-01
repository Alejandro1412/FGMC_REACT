//Packages
import React from "react";
import PropTypes from "prop-types";

//Componentes
import Button from "@mui/material/Button";

const ListFile = (props) => {
  const { handleChangeScreen } = props;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleChangeScreen(1);
        }}
      >
        Crear documento
      </Button>
    </>
  );
};

ListFile.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default ListFile;
