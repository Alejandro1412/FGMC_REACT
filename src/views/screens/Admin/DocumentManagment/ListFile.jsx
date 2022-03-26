//Packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

//Componentes
import Button from "@mui/material/Button";

//Hooks
import useControllers from "../../../../controllers";

const ListFile = (props) => {
  const { handleChangeScreen } = props;

  const { useScreenHooks } = useControllers();
  const { useAdminControllers } = useScreenHooks();
  const { useDocumentManagment } = useAdminControllers();
  const { CATEGORIAS, handleGoToCategory } = useDocumentManagment({
    handleChangeScreen,
  });

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleChangeScreen((prevState) => ({ ...prevState, view: 1 }));
        }}
      >
        Crear documento
      </Button>

      <h2 className="text-center font-bold text-2xl">
        {" "}
        Documentos disponibles{" "}
      </h2>

      {/* <section className="flex flex-col justify-center items-center space-y-4 mt-10 w-full">
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
      </section> */}

      <section className="flex flex-row flex-wrap justify-center">
        {_.map(CATEGORIAS, (category, idx) => {
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mx-10 my-10 cursor-pointer"
              key={`card-${idx}`}
              onClick={() => {
                handleGoToCategory(category);
              }}
            >
              <img
                class="w-full"
                src={category.imagen}
                alt="Sunset in the mountains"
              ></img>
              <div class="font-bold text-xl mb-2">{category.name}</div>
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
