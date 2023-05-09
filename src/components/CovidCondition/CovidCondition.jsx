import React from "react";
import { RightArrow, LeftArrow, RadioInput } from "@/components";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContextVariables } from "@/hooks";

const CovidCondition = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      isInfected: inputValues?.isInfected || null,
      isTested: inputValues?.isTested || null,
      date: inputValues?.date || "",
      antiVaccineCount: inputValues?.antiVaccineCount || null,
    },
  });
  const { handleSubmit, control, register } = form;

  const values = useWatch({ control });

  const submitForm = () => {
    setInputValues({ ...inputValues, ...values });
    setCurrentPage((prev) => prev + 1);
  };

  const back = () => {
    setInputValues({ ...inputValues, ...values });
    setCurrentPage((prev) => prev - 1);
  };

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
                useFormAttributes={{
                  ...register("isInfected", { required: true }),
                }}
              />
              <RadioInput
                name="isInfected"
                label="არა"
                useFormAttributes={{
                  ...register("isInfected", { required: true }),
                }}
              />
              <RadioInput
                name="isInfected"
                label="ახლა მაქვს"
                useFormAttributes={{
                  ...register("isInfected", { required: true }),
                }}
              />
            </div>

            {values?.isInfected === "კი" && (
              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </h2>
                <RadioInput
                  name="isTested"
                  label="კი"
                  useFormAttributes={{
                    ...register("isTested", { required: true }),
                  }}
                />
                <RadioInput
                  name="isTested"
                  label="არა"
                  useFormAttributes={{
                    ...register("isTested", { required: true }),
                  }}
                />
              </div>
            )}

            {values?.isTested === "არა" && (
              <div className="max-w-md w-full mt-10">
                <h2>
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა*
                </h2>

                <input
                  type="text"
                  className="input mt-5"
                  placeholder="რიცხვი"
                  {...register("date", {
                    required: true,
                    pattern: {
                      value:
                        /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}/,
                      message: "გთხოვთ ჩაწერეთ სწორი ფორმატით!",
                    },
                  })}
                />
                <input
                  type="number"
                  className="input mt-5"
                  placeholder="ანტისხეულების რაოდენობა"
                  {...register("antiVaccineCount", { required: true })}
                />
              </div>
            )}
          </div>
          <div className="flex-2 flex justify-end items-start ">
            <img className="w-10/12  " src="/images/two.png" alt="" />
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center gap-20 w-full  ">
          <button
            onClick={handleSubmit(submitForm)}
            className="cursor-pointer w-20"
          >
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
