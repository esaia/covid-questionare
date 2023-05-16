import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";
import { useNavigate } from "react-router-dom";

const useIsVaccinated = () => {
  const navigate = useNavigate();

  const { inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      had_vaccine: inputValues?.had_vaccine || null,
      i_am_waiting: inputValues?.i_am_waiting || null,
      vaccination_stage: inputValues?.vaccination_stage || null,
    },
  });
  const { handleSubmit, control, register, setValue } = form;

  const [had_vaccine, vaccination_stage, i_am_waiting] = useWatch({
    control,
    name: ["had_vaccine", "vaccination_stage", "i_am_waiting"],
  });

  const submitForm = (data) => {
    setInputValues({ ...inputValues, ...data });

    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );
    navigate("/covid-politic");
  };

  const back = () => {
    navigate("/covid-condition");
  };

  const resetFields = (e) => {
    setValue("vaccination_stage", null);
    setValue("i_am_waiting", null);
  };

  return {
    form,
    inputValues,
    setInputValues,
    submitForm,
    back,
    resetFields,
    handleSubmit,
    control,
    register,
    setValue,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  };
};

export default useIsVaccinated;
