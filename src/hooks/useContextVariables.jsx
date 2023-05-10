import { useContext } from "react";
import { FormContext } from "@/context";

export const useContextVariables = () => {
  const { inputValues, setInputValues, currentPage, setCurrentPage } =
    useContext(FormContext);

  return { inputValues, setInputValues, currentPage, setCurrentPage };
};
