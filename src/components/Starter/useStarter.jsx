import { useContextVariables } from "@/hooks";

const useStarter = () => {
  const { setCurrentPage } = useContextVariables();

  const changePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return { changePage };
};

export default useStarter;
