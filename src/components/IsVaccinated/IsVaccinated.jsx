import React from "react";
import { RightArrow, LeftArrow, RadioInput } from "@/components";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContextVariables } from "@/hooks";

const IsVaccinated = () => {
  const { setCurrentPage, inputValues, setInputValues } = useContextVariables();
  const form = useForm({
    defaultValues: {
      isVaccinated: inputValues?.isVaccinated || null,
      WhatAreYouWaiting: inputValues?.WhatAreYouWaiting || null,
      WhatStageIs: inputValues?.WhatStageIs || null,
    },
  });
  const { handleSubmit, control, register, setValue } = form;

  const submitForm = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const back = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const resetFields = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      WhatStageIs: null,
      WhatAreYouWaiting: null,
    });

    setValue("WhatStageIs", "");
    setValue("WhatAreYouWaiting", "");
  };

  const changeInputValues = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  console.log(inputValues);
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex mt-3 justify-between  min-h-[800px] ">
          <div className="flex-1 ">
            <div className="max-w-md w-full mt-10">
              <h2 className="font-bold">უკვე აცრილი ხარ?*</h2>
              <RadioInput
                name="isVaccinated"
                label="კი"
                useFormAttributes={{
                  ...register("isVaccinated", {
                    required: true,
                    onChange: (e) => resetFields(e),
                  }),
                }}
              />
              <RadioInput
                name="isVaccinated"
                label="არა"
                useFormAttributes={{
                  ...register("isVaccinated", {
                    required: true,
                    onChange: (e) => resetFields(e),
                  }),
                }}
              />
            </div>

            {inputValues?.isVaccinated === "კი" && (
              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold">აირჩიე რა ეტაპზე ხარ*</h2>
                <RadioInput
                  name="WhatStageIs"
                  label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                  useFormAttributes={{
                    ...register("WhatStageIs", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
                <RadioInput
                  name="WhatStageIs"
                  label="სრულად აცრილი ვარ"
                  useFormAttributes={{
                    ...register("WhatStageIs", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />

                <RadioInput
                  name="WhatStageIs"
                  label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                  useFormAttributes={{
                    ...register("WhatStageIs", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
              </div>
            )}

            {inputValues?.isVaccinated === "არა" && (
              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold">რას ელოდები?*</h2>
                <RadioInput
                  name="WhatAreYouWaiting"
                  label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                  useFormAttributes={{
                    ...register("WhatAreYouWaiting", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
                <RadioInput
                  name="WhatAreYouWaiting"
                  label="არ ვგეგმავ"
                  useFormAttributes={{
                    ...register("WhatAreYouWaiting", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />

                <RadioInput
                  name="WhatAreYouWaiting"
                  label="გადატანილი მაქვს და ვგეგმავ აცრას"
                  useFormAttributes={{
                    ...register("WhatAreYouWaiting", {
                      required: true,
                      onChange: (e) => changeInputValues(e),
                    }),
                  }}
                />
              </div>
            )}

            {inputValues?.WhatStageIs ===
              "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" &&
              inputValues?.isVaccinated === "კი" && (
                <div className="max-w-md w-52 mt-10 ml-6">
                  <p>
                    რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი{" "}
                    <span className="text-blue-600 cursor-pointer">
                      https://booking.moh.gov.ge/
                    </span>
                  </p>
                </div>
              )}

            {inputValues?.WhatAreYouWaiting ===
              "გადატანილი მაქვს და ვგეგმავ აცრას" &&
              inputValues?.isVaccinated === "არა" && (
                <div className=" w-96 mt-10 ml-6">
                  <p className="mb-5">
                    ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                    ვაქცინის გაკეთება.
                  </p>
                  <p>👉 რეგისტრაციის ბმული</p>
                  <span className="text-blue-600 cursor-pointer">
                    https://booking.moh.gov.ge/
                  </span>
                </div>
              )}
          </div>

          <div className="flex-2 flex justify-end items-start ">
            <img className="w-10/12  " src="/images/three.png" alt="" />
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

export default IsVaccinated;
