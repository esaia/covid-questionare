import { useGlobalVariables } from "@/hooks";

export const useMultiStepForm = (step) => {
  const { currentPage } = useGlobalVariables();

  return { step: step[currentPage], allSteps: step.length };
};
