import React, { createContext } from "react";
import useFormProvider from "./useFormProvider";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const { inputValues, currentPage } = useFormProvider();

  return (
    <FormContext.Provider value={{ inputValues, currentPage }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
