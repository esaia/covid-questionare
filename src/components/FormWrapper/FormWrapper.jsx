import React from "react";
import { Redberry } from "@/components";

const FormWrapper = ({ children }) => {
  return (
    <div className="max-w-[1500px] m-auto px-8 py-4">
      <div className="flex justify-between border-b border-black py-3">
        <Redberry />
        <h2 className="text-2xl ">1/4</h2>
      </div>

      {children}
    </div>
  );
};

export default FormWrapper;
