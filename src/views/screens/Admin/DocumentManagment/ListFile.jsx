//Packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

//Componentes
import Button from "@mui/material/Button";

//Assets
import { BiDownload } from "react-icons/bi";

//Hooks
import useControllers from "../../../../controllers";

const ListFile = (props) => {
  const { handleChangeScreen } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useDocumentManagment } = useAdminControllers();
  const { listOfMediaFiles, handleDownloadFile } = useDocumentManagment();

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

      <h2 className="text-center font-bold text-2xl">
        {" "}
        Documentos disponibles{" "}
      </h2>

      <section className="flex flex-col justify-center items-center space-y-4 mt-10 w-full">
        {listOfMediaFiles.length > 0 &&
          _.map(listOfMediaFiles, (file, index) => {
            return (
              <div
                className="shadow-2xl rounded-md w-full lg:w-1/2 bg-gray-400 uppercase m-auto flex justify-between px-4"
                key={`fileItem-${index}`}
              >
                <p className="px-4 underline font-semibold">
                  {" "}
                  {file.nombreDocumento}{" "}
                </p>
                <BiDownload
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => {
                    handleDownloadFile({
                      url: file.urlDocumento,
                      nameFile: file.nombreDocumento.split(" ").join(""),
                      extension: file.urlDocumento.split(".")[1],
                    });
                  }}
                />
              </div>
            );
          })}
      </section>
    </>
  );
};

ListFile.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
};

export default ListFile;
