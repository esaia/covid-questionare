import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const RadioInput = ({ name, label, registerOptions }) => {
  const { register } = useFormContext();

  return (
    <>
      <div className="flex justify-start items-center gap-2 mt-2 ml-2">
        <input
          type="radio"
          name={name}
          {...register(name, registerOptions)}
          value={label}
        />
        <label htmlFor="">{label}</label>
      </div>
    </>
  );
};

export default RadioInput;
