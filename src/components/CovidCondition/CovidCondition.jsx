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
    isInfected,
    isTested,
  } = useCovidCondition();

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex mt-3 justify-between  min-h-[800px] ">
          <div className="flex-1 ">
            <div className="max-w-md w-full mt-10">
              <h2 className="font-bold">გაქვს გადატანილი Covid-19?*</h2>
              <RadioInput
                name="isInfected"
                label="კი"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
              <RadioInput
                name="isInfected"
                label="არა"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
              <RadioInput
                name="isInfected"
                label="ახლა მაქვს"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
            </div>

            {isInfected === "კი" && (
              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </h2>
                <RadioInput
                  name="isTested"
                  label="კი"
                  registerOptions={{
                    required: true,
                    onChange: (e) => resetLastFields(e),
                  }}
                />
                <RadioInput
                  name="isTested"
                  label="არა"
                  registerOptions={{
                    required: true,
                    onChange: (e) => resetLastFields(e),
                  }}
                />
              </div>
            )}
            {isTested === "კი" && (
              <div className="max-w-md w-full mt-10">
                <h2>
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა*
                </h2>

                <Input
                  name="dateOfTest"
                  placeholder="რიცხვი"
                  className="mb-1"
                  registerOptions={{
                    required: true,
                    pattern: {
                      value:
                        /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}/,
                      message: "გთხოვთ ჩაწერეთ სწორი ფორმატით!",
                    },
                  }}
                />

                <Input
                  name="antiVaccineCount"
                  type="number"
                  placeholder="ანტისხეულების რაოდენობა"
                  registerOptions={{
                    required: true,
                  }}
                />
              </div>
            )}

            {isTested === "არა" && (
              <div className="max-w-md w-full mt-10">
                <h2>
                  მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                  Covid-19*
                </h2>

                <Input
                  name="dateOfCovid"
                  placeholder="რიცხვი"
                  className="mb-1"
                  registerOptions={{
                    required: true,
                    pattern: {
                      value:
                        /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}/,
                      message: "გთხოვთ ჩაწერეთ სწორი ფორმატით!",
                    },
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
