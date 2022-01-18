//Packages
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const DefaultToast = (props) => {
  const { showToast, handleHideToast, type, message } = props;

  const notify = () => {
    toast[type](message, {
      onClose: () => handleHideToast(),
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (showToast) {
      notify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToast]);

  return <ToastContainer></ToastContainer>;
};

DefaultToast.propTypes = {
  showToast: PropTypes.bool,
  handleHideToast: PropTypes.func,
  type: PropTypes.oneOf(["success", "error"]),
  message: PropTypes.string,
};

DefaultToast.defaultProps = {
  showToast: false,
  handleHideToast: () => {},
  type: "error",
  message: "",
};

export default DefaultToast;
