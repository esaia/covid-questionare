import React from "react";
import { Logo } from "@/components";
import useStarter from "./useStarter";

const Starter = () => {
  const { changePage } = useStarter();
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
