import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Input = ({
  name,
  label,
  placeholder = "",
  type = "text",
  registerOptions,
  className,
}) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <div
      className={
        "flex flex-col gap-2 mb-6 justify-start items-start " + className
      }
    >
      <label htmlFor={name} className="font-bold font-Helvetica">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="input"
        {...register(name, registerOptions)}
      />
      <div className="h-2">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="text-sm text-red-500 ml-3">{message}</p>
          )}
        />
      </div>
    </div>
  );
};

export default Input;
