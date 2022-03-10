//Packages
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
//Styles toast
import "react-toastify/dist/ReactToastify.css";

//Hooks
import useInterceptor from "../../../../config/interceptor";

const DefaultToast = (props) => {
  const { store } = props;

  const { showToast, handleHideToast, toastMessage, toastType } =
    useInterceptor({
      store,
    });

  const notify = () => {
    toast[toastType](toastMessage, {
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
  store: PropTypes.object.isRequired,
};

DefaultToast.defaultProps = {
  showToast: false,
  handleHideToast: () => {},
  type: "error",
  message: "",
};

export default DefaultToast;
