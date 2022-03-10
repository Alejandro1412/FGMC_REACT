//Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Hooks
import useApi from "../../../../api";
import useStrings from "../../../../strings";

const useContracts = () => {
  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useContractsActions } = useAdminActions();
  const { actCreateContract } = useContractsActions();

  const { useMessagesTypes, useConstants } = useStrings();
  const { LIST_TYPE_CONTRACTS } = useConstants();
  const { useFormsTypes } = useMessagesTypes();
  const { REQUIRED_FIELD } = useFormsTypes();

  const schemaArtistPartner = yup.object({
    nombreContrato: yup.string().nullable().required(REQUIRED_FIELD),
    // image: yup
    //   .mixed()
    //   .nullable()
    //   .test('fileType', FILE_TYPE, (value) => {
    //     if (value) {
    //       return SUPPORTED_FORMATS_ONLY_IMAGES.includes(value.type);
    //     }
    //     return true;
    //   })
    //   .test('fileSize', FILE_SIZE, (value) => {
    //     if (value) {
    //       return value.size <= MAX_SIZE;
    //     }
    //     return true;
    //   }),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaArtistPartner),
    mode: "onChange",
  });

  const handleCreateContract = (data) => {
    dispatch(actCreateContract({ ...data }));
  };

  return {
    LIST_TYPE_CONTRACTS,
    handleCreateContract,

    //rhf
    control,
    register,
    handleSubmit,
    errors,
  };
};

export default useContracts;
