import React from "react";
import {
  RightArrow,
  LeftArrow,
  RadioInput,
  Input,
  RedCircle,
  FramerMotionWrapper,
  RightArrowLight,
} from "@/components";
import { FormProvider } from "react-hook-form";
import useCovidCondition from "./useCovidCondition";
import { ErrorMessage } from "@hookform/error-message";

const CovidCondition = () => {
  const {
    form,
    handleSubmit,
    submitForm,
    back,
    resetFields,
    resetLastFields,
    had_covid,
    had_antibody_test,
    errors,
  } = useCovidCondition();

  return (
    <FramerMotionWrapper>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex mt-3 justify-between  min-h-[800px] ">
            <div className="flex-1 ">
              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold font-Helvetica">
                  გაქვს გადატანილი Covid-19?*
                </h2>
                <RadioInput
                  name="had_covid"
                  label="კი"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    onChange: (e) => resetFields(e),
                  }}
                />
                <RadioInput
                  name="had_covid"
                  label="არა"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    onChange: (e) => resetFields(e),
                  }}
                />
                <RadioInput
                  name="had_covid"
                  label="ახლა მაქვს"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    onChange: (e) => resetFields(e),
                  }}
                />

                <div className="h-2">
                  <ErrorMessage
                    errors={errors}
                    name={"had_covid"}
                    render={({ message }) => (
                      <p className="text-sm text-red-500 ml-3">{message}</p>
                    )}
                  />
                </div>
              </div>

              {had_covid === "კი" && (
                <div className="max-w-md w-full mt-10">
                  <h2 className="font-bold font-Helvetica">
                    ანტისხეულების ტესტი გაქვს გაკეთებული?*
                  </h2>
                  <RadioInput
                    name="had_antibody_test"
                    label="კი"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                      onChange: (e) => resetLastFields(e),
                    }}
                  />
                  <RadioInput
                    name="had_antibody_test"
                    label="არა"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                      onChange: (e) => resetLastFields(e),
                    }}
                  />

                  <div className="h-2">
                    <ErrorMessage
                      errors={errors}
                      name={"had_antibody_test"}
                      render={({ message }) => (
                        <p className="text-sm text-red-500 ml-3">{message}</p>
                      )}
                    />
                  </div>
                </div>
              )}
              {had_antibody_test === "კი" && (
                <div className="max-w-md w-full mt-10">
                  <h2 className="font-Helvetica mb-3">
                    თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                    ანტისხეულების რაოდენობა*
                  </h2>

                  <Input
                    name="test_date"
                    placeholder="რიცხვი"
                    type="date"
                    className="mb-2"
                  />

                  <Input
                    name="number"
                    placeholder="ანტისხეულების რაოდენობა"
                    registerOptions={{
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter only numbers",
                      },
                    }}
                  />
                </div>
              )}

              {had_antibody_test === "არა" && (
                <div className="max-w-md w-full mt-10">
                  <h2 className="font-Helvetica mb-3">
                    მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                    Covid-19*
                  </h2>

                  <Input
                    name="covid_sickness_date"
                    type="date"
                    placeholder="დდ/თთ/წწ"
                  />
                </div>
              )}
            </div>

            <div className="flex-2 flex justify-end items-start relative  ">
              <RedCircle />
              <img
                className="w-10/12  absolute top-0 left-[50%] translate-x-[-50%]  "
                src="/images/two.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-center gap-20 w-full  ">
            <button type="submit" className="cursor-pointer w-20">
              {Object.keys(errors).length !== 0 ? (
                <RightArrowLight />
              ) : (
                <RightArrow />
              )}
            </button>
            <button onClick={back} className="cursor-pointer w-20">
              <LeftArrow />
            </button>
          </div>
        </form>
      </FormProvider>
    </FramerMotionWrapper>
  );
};

export default CovidCondition;
