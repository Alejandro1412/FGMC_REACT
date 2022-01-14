//Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import useStrings from "../../../../strings";

const useLogin = () => {
  const { useMessagesTypes } = useStrings();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD, EMAIL_NOT_VALID } = useFormsTypes();

  // Schemas - validation
  const loginSchema = yup
    .object({
      email: yup.string().email(EMAIL_NOT_VALID).required(REQUIRED_FIELD),
      password: yup.string().required(REQUIRED_FIELD),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(loginSchema) });

  const handleLogin = () => {};

  return { handleSubmit, register, errors, handleLogin };
};

export default useLogin;
