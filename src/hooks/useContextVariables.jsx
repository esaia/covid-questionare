import { useContext } from "react";
import { FormContext } from "../context/FormProvider/FormProvider";

export const useContextVariables = () => {
  const { inputValues, setInputValues, currentPage, setCurrentPage } =
    useContext(FormContext);

  return { inputValues, setInputValues, currentPage, setCurrentPage };
};
