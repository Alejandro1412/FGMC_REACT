const useFormsTypes = () => {
  const REQUIRED_FIELD = "Campo requerido";
  const EMAIL_NOT_VALID = "Email no válido";
  const FILE_TYPE = "Tipo de archivo no permitido";
  const FILE_SIZE = "Archivo muy pesado, debe ser menor o igual 5MB";

  return { REQUIRED_FIELD, EMAIL_NOT_VALID, FILE_TYPE, FILE_SIZE };
};

export default useFormsTypes;
