import React, { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState(
    JSON.parse(localStorage.getItem("inputValues")) || {}
  );
  const [currentPage, setCurrentPage] = useState(
    +localStorage.getItem("currentPage") || 0
  );

  useEffect(() => {
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
  }, [inputValues]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <FormContext.Provider
      value={{ inputValues, setInputValues, currentPage, setCurrentPage }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
