import useApi from "../../..";
import useStrings from "../../../../strings";

const useDocumentManagmentActions = () => {
  const { useAdminTypes } = useStrings();
  const { useDocumentManagmentTypes } = useAdminTypes();
  const { CREATE_URL_MEDIA_FILE, UPLOAD_MEDIA_FILE, GET_ALL_MEDIA_FILES } =
    useDocumentManagmentTypes();

  const { useProviders } = useApi();
  const { useAdminProviders } = useProviders();
  const { useDocumentManagmentProviders } = useAdminProviders();
  const { createUrlForMediaFile, uploadMediaFile, getAllMediaFiles } =
    useDocumentManagmentProviders();

  const actCreateUrlForMediaFile = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await createUrlForMediaFile();
      dispatch({ type: CREATE_URL_MEDIA_FILE });
      onSuccess && onSuccess(res);
    } catch (error) {
      onError && onError(error);
    }
  };

  const actUploadMediaFile =
    ({ nombreDocumento, urlDocumento }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const res = await uploadMediaFile({
          nombreDocumento,
          urlDocumento,
        });
        dispatch({ type: UPLOAD_MEDIA_FILE });
        onSuccess && onSuccess(res);
      } catch (error) {
        onError && onError(error);
      }
    };

  const actGetAllMediaFiles = (onSuccess, onError) => async (dispatch) => {
    try {
      const res = await getAllMediaFiles();
      dispatch({ type: GET_ALL_MEDIA_FILES });
      onSuccess && onSuccess(res);
    } catch (error) {
      onError && onError(error);
    }
  };

  return { actCreateUrlForMediaFile, actUploadMediaFile, actGetAllMediaFiles };
};

export default useDocumentManagmentActions;
