import { useForm, useWatch } from "react-hook-form";
import { useContextVariables } from "@/hooks";

const useCovidCondition = () => {
  const { currentPage, setCurrentPage, inputValues, setInputValues } =
    useContextVariables();
  const form = useForm({
    defaultValues: {
      isInfected: inputValues?.isInfected || null,
      isTested: inputValues?.isTested || null,
      dateOfTest: inputValues?.dateOfTest || null,
      dateOfCovid: inputValues?.dateOfCovid || null,
      antiVaccineCount: inputValues?.antiVaccineCount || null,
    },
  });

  const { handleSubmit, control, register, setValue } = form;
  const [isInfected, isTested] = useWatch({
    control,
    name: ["isInfected", "isTested"],
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
    setValue("isTested", null);
    setValue("dateOfTest", null);
    setValue("dateOfCovid", null);
    setValue("antiVaccineCount", null);
  };

  const resetLastFields = () => {
    setValue("dateOfTest", null);
    setValue("dateOfCovid", null);
    setValue("antiVaccineCount", null);
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
    isInfected,
    isTested,
  };
};

export default useCovidCondition;
