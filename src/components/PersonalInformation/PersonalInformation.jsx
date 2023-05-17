import React from "react";
import {
  RightArrow,
  Input,
  YellowRectangle,
  FramerMotionWrapper,
} from "@/components";
import { FormProvider } from "react-hook-form";
import usePersonalInformation from "./usePersonalInformation";
const PersonalInformation = () => {
  const { form, handleSubmit, submitForm } = usePersonalInformation();

  return (
    <FramerMotionWrapper>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex mt-3 justify-between min-h-[800px]  ">
            <div className="flex-1 ">
              <div className="max-w-md w-full mt-10">
                <Input
                  name="first_name"
                  label="სახელი*"
                  placeholder="იოსებ"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    minLength: {
                      value: 2,
                      message:
                        "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
                    },
                  }}
                />
                <Input
                  name="last_name"
                  label="გვარი*"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    minLength: {
                      value: 2,
                      message:
                        "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
                    },
                  }}
                />
                <Input
                  name="email"
                  label="მეილი*"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                      message:
                        "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
                    },
                  }}
                />
              </div>

              <div className="mt-20">
                <hr width="50%" className=" bg-gray-500 h-[2px] mb-3" />
                <p className="w-72 text-gray-400 text-sm">
                  *-ით მონიშნული ველების შევსება სავალდებულოა
                </p>
              </div>
            </div>

            <div className="flex-2 flex justify-end items-start relative ">
              <YellowRectangle />
              <img
                className="w-10/12  absolute top-0 left-[50%] translate-x-[-50%] "
                src="/images/one.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center gap-20 w-full ">
            <div className="w-20"></div>

            <button type="submit" className="cursor-pointer w-20">
              <RightArrow />
            </button>
          </div>
        </form>
      </FormProvider>
    </FramerMotionWrapper>
  );
};

export default PersonalInformation;
