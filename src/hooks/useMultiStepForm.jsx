import { useContextVariables } from "@/hooks";

export const useMultiStepForm = (step) => {
  const { currentPage } = useContextVariables();

  return { step: step[+currentPage], allSteps: step.length };
};
