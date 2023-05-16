import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";
import { useNavigate } from "react-router-dom";

const useCovidCondition = () => {
  const navigate = useNavigate();

  const { inputValues, setInputValues } = useContextVariables();
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

    navigate("/is-vaccinated");

    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );
  };

  const back = () => {
    navigate("/personal");
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
    inputValues,
    setInputValues,
    submitForm,
    back,
    resetFields,
    resetLastFields,
    had_covid,
    had_antibody_test,
  };
};

export default useCovidCondition;
