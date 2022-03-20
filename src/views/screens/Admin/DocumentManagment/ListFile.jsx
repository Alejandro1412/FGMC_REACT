//Packages
import React, { useRef } from "react";
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
  const { listOfMediaFiles } = useDocumentManagment();

  console.log({ listOfMediaFiles });

  const dataFake = useRef([
    { name: "Foto grado", url: "https://google.com" },
    { name: "Pdf universidades", url: "https://google.com" },
    { name: "Programacion", url: "https://google.com" },
    { name: "Nomina", url: "https://google.com" },
    { name: "Gobierno del cauca", url: "https://google.com" },
    { name: "Seguridad y salud en el trabajo", url: "https://google.com" },
  ]);

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
        {dataFake.current.length > 0 &&
          _.map(dataFake.current, (file, index) => {
            return (
              <div
                className="shadow-2xl rounded-md w-full lg:w-1/2 bg-gray-400 uppercase m-auto flex justify-between px-4"
                key={`fileItem-${index}`}
              >
                <p className="px-4 underline font-semibold"> {file.name} </p>
                <BiDownload className="w-8 h-8 cursor-pointer" />
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
