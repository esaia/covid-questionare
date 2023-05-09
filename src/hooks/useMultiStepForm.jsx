import useGlobalVariables from "./useGlobalVariables";

const useMultiStepForm = (step) => {
  const { currentPage } = useGlobalVariables();

  return { step: step[currentPage], allSteps: step.length };
};

export default useMultiStepForm;
