import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useCovidPolitic = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      meetingFrequency: inputValues?.meetingFrequency || null,
      remoteWorkDay: inputValues?.remoteWorkDay || null,
      physicalMeetings: inputValues?.physicalMeetings || null,
      whatWouldYouChange: inputValues?.whatWouldYouChange || null,
    },
  });
  const { handleSubmit, control, register } = form;

  const values = useWatch({ control });

  const submitForm = () => {
    setInputValues({ ...inputValues, ...values });
    setCurrentPage((prev) => prev + 1);
  };

  const back = () => {
    setInputValues({ ...inputValues, ...values });
    setCurrentPage((prev) => prev - 1);
  };

  const changeInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return {
    form,
    setCurrentPage,
    inputValues,
    setInputValues,
    handleSubmit,
    control,
    register,
    submitForm,
    back,
    changeInputValues,
  };
};

export default useCovidPolitic;
