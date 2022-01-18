//Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

//Hooks
import useStrings from "../../../../strings";
import useApi from "../../../../api";

const useLogin = () => {
  const history = useHistory();

  const { useMessagesTypes } = useStrings();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD, EMAIL_NOT_VALID } = useFormsTypes();

  const { useActions } = useApi();
  const { dispatch, useAuthActions } = useActions();
  const { actLogin } = useAuthActions();

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

  const onSuccessHandleLogin = () => {
    history.push("/admin");
  };

  const handleLogin = (data) => {
    const { email, password } = data;
    dispatch(actLogin({ email, password }, onSuccessHandleLogin));
  };

  return { handleSubmit, register, errors, handleLogin };
};

export default useLogin;
