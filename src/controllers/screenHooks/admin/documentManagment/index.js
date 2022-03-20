//Packages
import { useEffect, useState } from "react";

//Hooks
import useApi from "../../../../api";

const useDocumentManagment = () => {
  const [listOfMediaFiles, setListOfMediaFiles] = useState([]);

  const { useActions } = useApi();
  const { dispatch, useAdminActions } = useActions();
  const { useDocumentManagmentActions } = useAdminActions();
  const { actGetAllMediaFiles } = useDocumentManagmentActions();

  useEffect(() => {
    dispatch(
      actGetAllMediaFiles((res) => {
        console.log({ res });
        setListOfMediaFiles(res.data.docs);
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetUrlMediaFile = (event) => {};

  const handleUploadMediaFile = (event) => {};

  return { handleGetUrlMediaFile, handleUploadMediaFile, listOfMediaFiles };
};

export default useDocumentManagment;
