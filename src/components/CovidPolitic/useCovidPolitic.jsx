import { useForm } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useCovidPolitic = () => {
  const { currentPage, setCurrentPage, inputValues, setInputValues } =
    useContextVariables();
  const form = useForm({
    defaultValues: {
      meetingFrequency: inputValues?.meetingFrequency || null,
      remoteWorkDay: inputValues?.remoteWorkDay || null,
      physicalMeetings: inputValues?.physicalMeetings || null,
      whatWouldYouChange: inputValues?.whatWouldYouChange || null,
    },
  });
  const { handleSubmit, control, register } = form;

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
  };
};

export default useCovidPolitic;
