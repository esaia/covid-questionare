import React from "react";
import { RightArrow, LeftArrow, RadioInput } from "@/components";
import { FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useIsVaccinated from "./useIsVaccinated";

const IsVaccinated = () => {
  const {
    form,
    submitForm,
    back,
    resetFields,
    handleSubmit,
    control,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  } = useIsVaccinated();

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex mt-3 justify-between  min-h-[800px] ">
          <div className="flex-1 ">
            <div className="max-w-md w-full mt-10">
              <h2 className="font-bold font-Helvetica">უკვე აცრილი ხარ?*</h2>
              <RadioInput
                name="had_vaccine"
                label="კი"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
              <RadioInput
                name="had_vaccine"
                label="არა"
                registerOptions={{
                  required: true,
                  onChange: (e) => resetFields(e),
                }}
              />
            </div>
            {had_vaccine === "კი" && (
              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold font-Helvetica">
                  აირჩიე რა ეტაპზე ხარ*
                </h2>
                <RadioInput
                  name="vaccination_stage"
                  label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                  registerOptions={{
                    required: true,
                  }}
                />
                <RadioInput
                  name="vaccination_stage"
                  label="სრულად აცრილი ვარ"
                  registerOptions={{
                    required: true,
                  }}
                />

                <RadioInput
                  name="vaccination_stage"
                  label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                  registerOptions={{
                    required: true,
                  }}
                />
              </div>
            )}
            {had_vaccine === "არა" && (
              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold font-Helvetica">რას ელოდები?*</h2>
                <RadioInput
                  name="i_am_waiting"
                  label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                  registerOptions={{
                    required: true,
                  }}
                />
                <RadioInput
                  name="i_am_waiting"
                  label="არ ვგეგმავ"
                  registerOptions={{
                    required: true,
                  }}
                />

                <RadioInput
                  name="i_am_waiting"
                  label="გადატანილი მაქვს და ვგეგმავ აცრას"
                  registerOptions={{
                    required: true,
                  }}
                />
              </div>
            )}

            {vaccination_stage ===
              "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" &&
              had_vaccine === "კი" && (
                <div className="max-w-md w-52 mt-10 ml-6">
                  <p>
                    რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი{" "}
                    <span className="text-blue-600 cursor-pointer">
                      https://booking.moh.gov.ge/
                    </span>
                  </p>
                </div>
              )}

            {i_am_waiting === "გადატანილი მაქვს და ვგეგმავ აცრას" &&
              had_vaccine === "არა" && (
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
            <img className="w-10/12" src="/images/three.png" alt="" />
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

export default IsVaccinated;
