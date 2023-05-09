import React from "react";
import { Logo } from "@/components";
import { useContextVariables } from "@/hooks";

const Starter = () => {
  const { setCurrentPage } = useContextVariables();

  const changePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20 ">
      <Logo className="w-40" />
      <h1
        className="font-bolds text-3xl w-40 text-center cursor-pointer"
        onClick={changePage}
      >
        კითხვარის დაწყება
      </h1>
    </div>
  );
};

export default Starter;
