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
    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );

    try {
      const postData = async () => {
        await fetch("https://covid19.devtest.ge/api/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...inputValues, ...data }),
        });
      };
      postData();
      setCurrentPage((prev) => prev + 1);
      localStorage.setItem("currentPage", currentPage + 1);
    } catch (error) {
      console.log(error);
    }
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
