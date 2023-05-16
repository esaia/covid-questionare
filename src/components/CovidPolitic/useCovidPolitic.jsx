import { useForm } from "react-hook-form";
import { useContextVariables } from "@/hooks";
import { useNavigate } from "react-router-dom";

const useCovidPolitic = () => {
  const navigate = useNavigate();

  const { inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      non_formal_meetings: inputValues?.non_formal_meetings || null,
      number_of_days_from_office:
        inputValues?.number_of_days_from_office || null,
      what_about_meetings_in_live:
        inputValues?.what_about_meetings_in_live || null,
      tell_us_your_opinion_about_us:
        inputValues?.tell_us_your_opinion_about_us || null,
    },
  });
  const { handleSubmit, control, register } = form;

  const submitForm = (data) => {
    setInputValues({ ...inputValues, ...data });
    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );

    try {
      const postData = async () => {
        await fetch(import.meta.env.VITE_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...inputValues, ...data }),
        });
      };
      postData();
      navigate("/thank-you");
    } catch (error) {
      console.error(error);
    }
  };

  const back = () => {
    navigate("/is-vaccinated");
  };

  return {
    form,
    inputValues,
    setInputValues,
    handleSubmit,
    control,
    register,
    submitForm,
    back,
  };
};

export default useCovidPolitic;
