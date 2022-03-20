import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

//Assets
import imageUploadFile from "../../../assets/images/upload-file.png";

const UploadFiles = (props) => {
  const { className, name, accept, errors, onChange } = props;

  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleGetFile = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };

  return (
    <section className={`${className}`}>
      <h3 className="text-lg text-gray-400">Selecciona documento *</h3>

      <img
        src={imageUploadFile}
        alt="upload file"
        onClick={() => {
          inputRef.current.click();
        }}
        className="w-44 h-48 cursor-pointer"
      />

      <input
        style={{ zIndex: "-100" }}
        className="absolute left-0 w-full h-full opacity-0 z-last top-0"
        type="file"
        ref={inputRef}
        name={name}
        accept={accept}
        onInput={handleGetFile}
        onChange={onChange}
      />

      {fileName && (
        <p>
          Documento cargado:{" "}
          <span className="bg-amber-300 px-4 py-1 rounded-md">{fileName}</span>{" "}
        </p>
      )}

      {errors?.[name] && <p className="text-red-700">{errors[name].message}</p>}
    </section>
  );
};

UploadFiles.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  errors: PropTypes.object,
  onChange: PropTypes.object,
};

UploadFiles.defaultProps = {
  className: "",
  name: "",
  accept:
    "image/png, image/jpeg, application/pdf, application/msword, application/vnd.ms-excel ",
  errors: {},
  onChange: () => {},
};

export default UploadFiles;
