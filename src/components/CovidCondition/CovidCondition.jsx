import React from "react";
import { RightArrow, LeftArrow, RadioInput } from "@/components";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContextVariables } from "@/hooks";

const CovidCondition = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      isInfected: inputValues?.isInfected || null,
      isTested: inputValues?.isTested || null,
      date: inputValues?.date || null,
      antiVaccineCount: inputValues?.antiVaccineCount || null,
    },
  });
  const { handleSubmit, control, register, setValue } = form;

  const submitForm = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const back = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const changeFirstQuestion = (e) => {
    setValue("isTested", "");
    setValue("date", "");
    setValue("antiVaccineCount", "");

    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      isTested: null,
      date: null,
      antiVaccineCount: null,
    });
  };

  const changeInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
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
                  ...register("isInfected", {
                    required: true,
                    onChange: (e) => changeFirstQuestion(e),
                  }),
                }}
              />
              <RadioInput
                name="isInfected"
                label="არა"
                useFormAttributes={{
                  ...register("isInfected", {
                    required: true,
                    onChange: (e) => changeFirstQuestion(e),
                  }),
                }}
              />
              <RadioInput
                name="isInfected"
                label="ახლა მაქვს"
                useFormAttributes={{
                  ...register("isInfected", {
                    required: true,
                    onChange: (e) => changeFirstQuestion(e),
                  }),
                }}
              />
            </div>

            {inputValues?.isInfected === "კი" && (
              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </h2>
                <RadioInput
                  name="isTested"
                  label="კი"
                  useFormAttributes={{
                    ...register("isTested", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
                <RadioInput
                  name="isTested"
                  label="არა"
                  useFormAttributes={{
                    ...register("isTested", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
              </div>
            )}

            {inputValues?.isTested === "არა" && (
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
                    onChange: (e) => changeInputValues(e),
                  })}
                />
                <input
                  type="number"
                  className="input mt-5"
                  placeholder="ანტისხეულების რაოდენობა"
                  {...register("antiVaccineCount", {
                    required: true,
                    onChange: (e) => changeInputValues(e),
                  })}
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
