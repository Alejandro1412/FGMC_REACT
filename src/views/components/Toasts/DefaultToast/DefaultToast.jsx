//Packages
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
//Styles toast
import "react-toastify/dist/ReactToastify.css";

//Hooks
import useApi from "../../../../api";
import useModels from "../../../../models";

const DefaultToast = () => {
  const { useActions } = useApi();
  const { dispatch, useGeneralActions } = useActions();
  const { actHideGeneralToast } = useGeneralActions();

  const { useSelectors } = useModels();
  const { useSelector, useGeneralSelectors } = useSelectors();
  const { generalToastSelector } = useGeneralSelectors();
  const dataToast = useSelector(generalToastSelector);

  const handleHideToast = () => dispatch(actHideGeneralToast());

  const notify = () => {
    toast[dataToast.typeMessage](dataToast.message, {
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
    if (dataToast.state) {
      notify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataToast.state]);

  return <ToastContainer></ToastContainer>;
};

export default DefaultToast;
