import React from "react";

const RadioInput = ({ name, label, useFormAttributes }) => {
  return (
    <div className="flex justify-start items-center gap-2 mt-2">
      <input type="radio" name={name} {...useFormAttributes} value={label} />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default RadioInput;
