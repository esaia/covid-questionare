import { useForm } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const usePersonalInformation = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      name: inputValues?.name || null,
      username: inputValues?.username || null,
      email: inputValues?.email || "ninas.imedia.moewoneba@redberry.ge",
    },
  });
  const { handleSubmit, control } = form;

  const submitForm = () => {
    setCurrentPage((prev) => prev + 1);
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
    submitForm,
    changeInputValues,
  };
};

export default usePersonalInformation;
