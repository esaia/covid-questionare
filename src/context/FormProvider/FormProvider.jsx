import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState(
    JSON.parse(localStorage.getItem("inputValues")) || {}
  );

  return (
    <FormContext.Provider value={{ inputValues, setInputValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
