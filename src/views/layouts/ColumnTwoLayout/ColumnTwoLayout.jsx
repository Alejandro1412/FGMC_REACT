import React from "react";
import PropTypes from "prop-types";

const ColumnTwoLayout = (props) => {
  const {
    rightPart,
    leftPart,
    topPart,
    classNameRight,
    classNameLeft,
    className,
  } = props;
  return (
    <section className={`flex flex-col lg:flex-row ${className}`}>
      {topPart}
      <section className={`transition-all duration-200 ${classNameLeft}`}>
        {leftPart}
      </section>
      <section className={`transition-all duration-200 ${classNameRight}`}>
        {rightPart}
      </section>
    </section>
  );
};

ColumnTwoLayout.propTypes = {
  rightPart: PropTypes.element.isRequired,
  leftPart: PropTypes.element.isRequired,
  topPart: PropTypes.element,
  classNameRight: PropTypes.string,
  classNameLeft: PropTypes.string,
  className: PropTypes.string,
};

ColumnTwoLayout.defaultProps = {
  classNameRight: "",
  classNameLeft: "",
  className: "",
};

export default ColumnTwoLayout;
