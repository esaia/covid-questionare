import React from "react";
import { RightArrow, LeftArrow, Redberry } from "@/components";

const FormWrapper = ({ children, imgURL }) => {
  return (
    <div className="max-w-[1500px] m-auto p-4">
      <div className="flex justify-between border-b border-black py-3">
        <Redberry />
        <h2 className="text-xl ">1/4</h2>
      </div>
      <div className="flex mt-3 justify-between ">
        <div className="flex-1 ">{children}</div>
        <div className="flex-1">
          <img className="w-full " src={imgURL} alt="" />
        </div>
      </div>

      <div className="flex justify-center gap-20 w-full ">
        <div className="cursor-pointer  ">
          <LeftArrow />
        </div>
        <div className="cursor-pointer ">
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
