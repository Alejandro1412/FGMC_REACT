import useAdminTypes from "./admin";
import useAuthTypes from "./auth";
import useMessagesTypes from "./messages";

const useStrings = () => {
  return { useMessagesTypes, useAuthTypes, useAdminTypes };
};

export default useStrings;
