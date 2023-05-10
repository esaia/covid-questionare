import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useIsVaccinated = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      isVaccinated: inputValues?.isVaccinated || null,
      WhatAreYouWaiting: inputValues?.WhatAreYouWaiting || null,
      WhatStageIs: inputValues?.WhatStageIs || null,
    },
  });
  const { handleSubmit, control, register, setValue } = form;

  const values = useWatch({ control });

  const submitForm = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const back = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const resetFields = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      WhatStageIs: null,
      WhatAreYouWaiting: null,
    });

    setValue("WhatStageIs", "");
    setValue("WhatAreYouWaiting", "");
  };

  const changeInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return {
    form,
    setCurrentPage,
    inputValues,
    setInputValues,
    submitForm,
    back,
    resetFields,
    changeInputValues,
    handleSubmit,
    control,
    register,
    setValue,
    values,
  };
};

export default useIsVaccinated;
