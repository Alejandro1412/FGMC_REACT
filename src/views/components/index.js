import useLoaders from "./Loaders";
import useToasts from "./Toasts";

const useComponents = () => {
  return { useToasts, useLoaders };
};

export default useComponents;
