import useAuthTypes from "./auth";
import useMessagesTypes from "./messages";

const useStrings = () => {
  return { useMessagesTypes, useAuthTypes };
};

export default useStrings;
