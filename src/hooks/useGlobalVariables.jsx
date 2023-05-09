import { useContext } from "react";
import { FormContext } from "../context/FormProvider/FormProvider";

const useGlobalVariables = () => {
  const { inputValues, currentPage, setCurrentPage } = useContext(FormContext);
  return { inputValues, currentPage, setCurrentPage };
};

export default useGlobalVariables;