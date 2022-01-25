import useLoaders from "./Loaders";
import useSidebars from "./Sidebars";
import useToasts from "./Toasts";

const useComponents = () => {
  return { useToasts, useLoaders, useSidebars };
};

export default useComponents;
