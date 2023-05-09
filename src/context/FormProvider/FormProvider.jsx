import React, { createContext } from "react";
import { useFormProvider } from "@/context";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const { inputValues, currentPage, setCurrentPage } = useFormProvider();

  return (
    <FormContext.Provider value={{ inputValues, currentPage, setCurrentPage }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
