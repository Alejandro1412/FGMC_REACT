import React from "react";
import PropTypes from "prop-types";

const DefaultHeader = (props) => {
  const { name, className } = props;

  return (
    <header className={`px-5 w-full flex flex-row-reverse ${className}`}>
      <h3 className="font-bold">
        Hola, <span className="underline uppercase">{name}</span>
      </h3>
    </header>
  );
};

DefaultHeader.propTypes = {
  className: PropTypes.string,
};

DefaultHeader.defaultProps = {
  className: "",
};

export default DefaultHeader;
