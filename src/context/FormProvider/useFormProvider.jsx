import { useState } from "react";

const useFormProvider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return { currentPage, setCurrentPage };
};

export default useFormProvider;
