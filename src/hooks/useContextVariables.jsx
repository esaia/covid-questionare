import { useContext } from "react";
import { FormContext } from "../context/FormProvider/FormProvider";

export const useContextVariables = () => {
  const { currentPage, setCurrentPage } = useContext(FormContext);
  return { currentPage, setCurrentPage };
};
