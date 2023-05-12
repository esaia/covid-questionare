import React from "react";
import { RightArrow, LeftArrow, RadioInput, Input } from "@/components";
import { FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useCovidCondition from "./useCovidCondition";

const CovidCondition = () => {
  const {
    form,
    handleSubmit,
    control,
    submitForm,
    back,
    resetFields,
    resetLastFields,
    had_covid,
    had_antibody_test,
  } = useCovidCondition();

  return (
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
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
              <RadioInput
                name="had_covid"
                label="არა"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
              <RadioInput
                name="had_covid"
                label="ახლა მაქვს"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
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
                    required: true,
                    onChange: (e) => resetLastFields(e),
                  }}
                />
                <RadioInput
                  name="had_antibody_test"
                  label="არა"
                  registerOptions={{
                    required: true,
                    onChange: (e) => resetLastFields(e),
                  }}
                />
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
                  registerOptions={{
                    required: true,
                  }}
                />

                <Input
                  name="number"
                  type="number"
                  placeholder="ანტისხეულების რაოდენობა"
                  registerOptions={{
                    required: true,
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
                  registerOptions={{
                    required: true,
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex-2 flex justify-end items-start ">
            <img className="w-10/12  " src="/images/two.png" alt="" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center gap-20 w-full  ">
          <button type="submit" className="cursor-pointer w-20">
            <RightArrow />
          </button>
          <button onClick={back} className="cursor-pointer w-20">
            <LeftArrow />
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
};

export default CovidCondition;
