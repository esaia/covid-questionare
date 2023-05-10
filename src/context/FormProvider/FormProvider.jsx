import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <FormContext.Provider
      value={{ inputValues, setInputValues, currentPage, setCurrentPage }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
