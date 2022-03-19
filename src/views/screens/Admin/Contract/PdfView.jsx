//Packages
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import dayjs from "dayjs";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
import { Button } from "@mui/material";

//Hooks
import useStrings from "../../../../strings";

const PdfView = (props) => {
  const { handleChangeScreen, screenActive } = props;
  const pdfViewRef = useRef();

  const data = screenActive.data;

  const { useConstants } = useStrings();
  const { TYPE_CONTRACTS } = useConstants();

  console.log({ data });
  const dateInJsFechaIngreso = new Date(data.fechaIngreso);
  const dateInJsFechaFin = new Date(data.fechaRetiro);

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8 mb-5"
        onClick={() => {
          handleChangeScreen((prevState) => ({
            ...prevState,
            view: 0,
          }));
        }}
      />

      <Pdf
        targetRef={pdfViewRef}
        filename={`${TYPE_CONTRACTS[data.nombreContrato]}-${data.cargo}.pdf`}
      >
        {({ toPdf }) => (
          <Button variant="contained" className="mt-5" onClick={toPdf}>
            Descargar contrato
          </Button>
        )}
      </Pdf>

      <section ref={pdfViewRef} className="p-10 max-w-3xl mx-auto">
        <h1 className="text-center pb-5">
          {" "}
          CONTRATO:{" "}
          <span className="font-semibold uppercase">
            {" "}
            {TYPE_CONTRACTS[data.nombreContrato]}
          </span>{" "}
          FUNDACION FGMC POPAYAN{" "}
        </h1>

        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Fecha ingreso:</span>{" "}
            {dayjs(dateInJsFechaIngreso).format("MMM DD YYYY")}
          </p>
          <p>
            <span className="font-semibold">Fecha retiro:</span>{" "}
            {dayjs(dateInJsFechaFin).format("MMM DD YYYY")}
          </p>
        </div>
      </section>
    </>
  );
};

PdfView.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.object.isRequired,
};

export default PdfView;
