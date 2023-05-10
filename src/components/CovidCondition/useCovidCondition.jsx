import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useCovidCondition = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      isInfected: inputValues?.isInfected || null,
      isTested: inputValues?.isTested || null,
      date: inputValues?.date || null,
      antiVaccineCount: inputValues?.antiVaccineCount || null,
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

  const changeFirstQuestion = (e) => {
    setValue("isTested", "");
    setValue("date", "");
    setValue("antiVaccineCount", "");

    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      isTested: null,
      date: null,
      antiVaccineCount: null,
    });
  };

  const changeInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return {
    form,
    handleSubmit,
    control,
    register,
    setCurrentPage,
    inputValues,
    setInputValues,
    submitForm,
    back,
    changeFirstQuestion,
    changeInputValues,
    register,
    values,
  };
};

export default useCovidCondition;
