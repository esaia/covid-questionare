import React from "react";
import {
  RightArrow,
  LeftArrow,
  RadioInput,
  Star,
  FramerMotionWrapper,
  RightArrowLight,
} from "@/components";
import { FormProvider } from "react-hook-form";
import useIsVaccinated from "./useIsVaccinated";
import { ErrorMessage } from "@hookform/error-message";

const IsVaccinated = () => {
  const {
    form,
    submitForm,
    back,
    resetFields,
    handleSubmit,
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
    errors,
  } = useIsVaccinated();

  return (
    <FramerMotionWrapper>
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
                    required: "ამ ველის შევსება სავალდებულოა",
                    onChange: (e) => resetFields(e),
                  }}
                />
                <RadioInput
                  name="had_vaccine"
                  label="არა"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                    onChange: (e) => resetFields(e),
                  }}
                />

                <div className="h-2">
                  <ErrorMessage
                    errors={errors}
                    name={"had_vaccine"}
                    render={({ message }) => (
                      <p className="text-sm text-red-500 ml-3">{message}</p>
                    )}
                  />
                </div>
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
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />
                  <RadioInput
                    name="vaccination_stage"
                    label="სრულად აცრილი ვარ"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />

                  <RadioInput
                    name="vaccination_stage"
                    label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />

                  <div className="h-2">
                    <ErrorMessage
                      errors={errors}
                      name={"vaccination_stage"}
                      render={({ message }) => (
                        <p className="text-sm text-red-500 ml-3">{message}</p>
                      )}
                    />
                  </div>
                </div>
              )}
              {had_vaccine === "არა" && (
                <div className="max-w-xl w-full mt-10">
                  <h2 className="font-bold font-Helvetica">რას ელოდები?*</h2>
                  <RadioInput
                    name="i_am_waiting"
                    label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />
                  <RadioInput
                    name="i_am_waiting"
                    label="არ ვგეგმავ"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />

                  <RadioInput
                    name="i_am_waiting"
                    label="გადატანილი მაქვს და ვგეგმავ აცრას"
                    registerOptions={{
                      required: "ამ ველის შევსება სავალდებულოა",
                    }}
                  />

                  <div className="h-2">
                    <ErrorMessage
                      errors={errors}
                      name={"i_am_waiting"}
                      render={({ message }) => (
                        <p className="text-sm text-red-500 ml-3">{message}</p>
                      )}
                    />
                  </div>
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
                      ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ
                      შეგიძლიათ ვაქცინის გაკეთება.
                    </p>
                    <p>👉 რეგისტრაციის ბმული</p>
                    <span className="text-blue-600 cursor-pointer">
                      https://booking.moh.gov.ge/
                    </span>
                  </div>
                )}
            </div>

            <div className="flex-2 flex justify-end items-start relative  ">
              <Star />
              <img
                className="w-10/12  absolute top-0 left-[50%] translate-x-[-50%]  "
                src="/images/three.png"
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

export default IsVaccinated;
