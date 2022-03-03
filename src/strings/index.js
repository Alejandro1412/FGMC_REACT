import useAdminTypes from "./admin";
import useAuthTypes from "./auth";
import useConstants from "./constants";
import useMessagesTypes from "./messages";

const useStrings = () => {
  return { useMessagesTypes, useAuthTypes, useAdminTypes, useConstants };
};

export default useStrings;
