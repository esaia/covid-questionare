import { useForm } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const usePersonalInformation = () => {
  const { currentPage, setCurrentPage, inputValues, setInputValues } =
    useContextVariables();
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
    setCurrentPage((prev) => prev + 1);

    localStorage.setItem(
      "inputValues",
      JSON.stringify({ ...inputValues, ...data })
    );
    localStorage.setItem("currentPage", currentPage + 1);
  };

  return {
    form,
    setCurrentPage,
    inputValues,
    setInputValues,
    handleSubmit,
    control,
    submitForm,
    currentPage,
  };
};

export default usePersonalInformation;
