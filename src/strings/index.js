import useAdminTypes from "./admin";
import useAuthTypes from "./auth";
import useConstants from "./constants";
import useGeneralTypes from "./general";
import useMessagesTypes from "./messages";

const useStrings = () => {
  return {
    useMessagesTypes,
    useAuthTypes,
    useAdminTypes,
    useConstants,
    useGeneralTypes,
  };
};

export default useStrings;
