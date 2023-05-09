import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  label,
  placeholder = "",
  type = "text",
  useFormAttributes,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 mb-6 ">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="px-3 py-2 border border-black outline-none bg-[#eaeaea]"
        {...useFormAttributes}
      />
      <p className="text-sm text-red-500 ml-3">{errors?.[name]?.message}</p>
    </div>
  );
};

export default Input;
