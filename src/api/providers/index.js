import useAdminProviders from "./admin";
import useAuthProviders from "./auth";

const useProviders = () => {
  return { useAuthProviders, useAdminProviders };
};

export default useProviders;
