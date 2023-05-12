import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useCovidCondition = () => {
  const { currentPage, setCurrentPage, inputValues, setInputValues } =
    useContextVariables();
  const form = useForm({
    defaultValues: {
      had_covid: inputValues?.had_covid || null,
      had_antibody_test: inputValues?.had_antibody_test || null,
      test_date: inputValues?.test_date || null,
      covid_sickness_date: inputValues?.covid_sickness_date || null,
      number: inputValues?.number || null,
    },
  });

  const { handleSubmit, control, register, setValue } = form;
  const [had_covid, had_antibody_test] = useWatch({
    control,
    name: ["had_covid", "had_antibody_test"],
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

  const resetFields = () => {
    setValue("had_antibody_test", null);
    setValue("test_date", null);
    setValue("covid_sickness_date", null);
    setValue("number", null);
  };

  const resetLastFields = () => {
    setValue("test_date", null);
    setValue("covid_sickness_date", null);
    setValue("number", null);
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
    resetFields,
    resetLastFields,
    register,
    had_covid,
    had_antibody_test,
  };
};

export default useCovidCondition;
