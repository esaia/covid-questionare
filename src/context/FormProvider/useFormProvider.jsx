import { useState } from "react";

const useFormProvider = () => {
  const [inputValues, setInputValues] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  return { inputValues, currentPage, setCurrentPage };
};

export default useFormProvider;
