import { useForm } from "react-hook-form";
import { useContextVariables } from "@/hooks";
import { useNavigate } from "react-router-dom";
const usePersonalInformation = () => {
  const navigate = useNavigate();
  const { inputValues, setInputValues } = useContextVariables();

  const form = useForm({
    defaultValues: {
      first_name: inputValues?.first_name || null,
      last_name: inputValues?.last_name || null,
      email: inputValues?.email || null,
    },
  });
  const { handleSubmit, control } = form;

  const submitForm = (data) => {
    setInputValues({ ...inputValues, ...data });
    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );
    navigate("/covid-condition");
  };

  return {
    form,
    inputValues,
    setInputValues,
    handleSubmit,
    control,
    submitForm,
  };
};

export default usePersonalInformation;
