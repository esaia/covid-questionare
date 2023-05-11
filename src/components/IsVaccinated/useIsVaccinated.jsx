import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useIsVaccinated = () => {
  const { currentPage, setCurrentPage, inputValues, setInputValues } =
    useContextVariables();
  const form = useForm({
    defaultValues: {
      isVaccinated: inputValues?.isVaccinated || null,
      WhatAreYouWaiting: inputValues?.WhatAreYouWaiting || null,
      WhatStageIs: inputValues?.WhatStageIs || null,
    },
  });
  const { handleSubmit, control, register, setValue } = form;

  const [isVaccinated, WhatStageIs, WhatAreYouWaiting] = useWatch({
    control,
    name: ["isVaccinated", "WhatStageIs", "WhatAreYouWaiting"],
  });

  const submitForm = (data) => {
    setInputValues({ ...inputValues, ...data });
    setCurrentPage((prev) => prev + 1);
    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );
    localStorage.setItem("currentPage", currentPage + 1);
  };

  const back = () => {
    setCurrentPage((prev) => prev - 1);
    localStorage.setItem("currentPage", currentPage - 1);
  };

  const resetFields = (e) => {
    setValue("WhatStageIs", null);
    setValue("WhatAreYouWaiting", null);
  };

  return {
    form,
    setCurrentPage,
    inputValues,
    setInputValues,
    submitForm,
    back,
    resetFields,
    handleSubmit,
    control,
    register,
    setValue,
    isVaccinated,
    WhatStageIs,
    WhatAreYouWaiting,
  };
};

export default useIsVaccinated;
