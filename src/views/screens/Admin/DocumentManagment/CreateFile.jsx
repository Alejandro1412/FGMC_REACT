//Packages
import React from "react";
import PropTypes from "prop-types";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
import TextField from "@mui/material/TextField";
import UploadFiles from "../../../components/UploadFiles/UploadFiles";
import Button from "@mui/material/Button";

//Styles
import { StyledForm } from "../../../../styles/form.styles";

//Hooks
import useControllers from "../../../../controllers";

const CreateFile = (props) => {
  const { handleChangeScreen } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useDocumentManagment } = useAdminControllers();
  useDocumentManagment();

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8"
        onClick={() => {
          handleChangeScreen(0);
        }}
      />

      <h2 className="text-center font-bold text-2xl"> Crear Documento </h2>

      <StyledForm>
        <TextField
          id="outlined-basic"
          label="Nombre del documento"
          variant="standard"
          className="block w-full lg:w-1/2"
          type="text"
          // error={errors["email"]?.message}
          // helperText={errors["email"]?.message}
          required
          // {...register("email")}
        />
        <UploadFiles className="w-full lg:w-1/2" />
        <Button variant="contained" className="w-40">
          {" "}
          Cargar Documento
        </Button>
      </StyledForm>
    </>
  );
};

CreateFile.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default CreateFile;
