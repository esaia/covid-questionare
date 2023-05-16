import { useContext } from "react";
import { FormContext } from "@/context";

export const useContextVariables = () => {
  const { inputValues, setInputValues } = useContext(FormContext);

  return { inputValues, setInputValues };
};
