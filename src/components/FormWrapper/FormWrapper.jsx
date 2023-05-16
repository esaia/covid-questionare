import React, { useEffect, useState } from "react";
import { Redberry } from "@/components";
import { useLocation } from "react-router-dom";

const FormWrapper = ({ children }) => {
  const [number, setnumber] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/personal":
        setnumber(1);
        break;
      case "/covid-condition":
        setnumber(2);
        break;
      case "/is-vaccinated":
        setnumber(3);
        break;
      case "/covid-politic":
        setnumber(4);
        break;
      default:
        setnumber(0);
    }
  }, [location]);

  return (
    <div className="max-w-[1500px] m-auto px-8 py-4">
      <div className="flex justify-between border-b border-black py-3">
        <Redberry />
        <h2 className="text-2xl ">{number}/4</h2>
      </div>

      {children}
    </div>
  );
};

export default FormWrapper;
