import React from "react";
import {
  LeftArrow,
  RadioInput,
  Heart,
  FramerMotionWrapper,
} from "@/components";
import { FormProvider } from "react-hook-form";
import useCovidPolitic from "./useCovidPolitic";
import { ErrorMessage } from "@hookform/error-message";

const CovidPolitic = () => {
  const { form, handleSubmit, register, submitForm, back, errors } =
    useCovidPolitic();

  return (
    <FramerMotionWrapper>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex mt-3 justify-between  min-h-[800px] ">
            <div className="flex-1 ">
              <div className="max-w-xl w-full mt-10 ">
                <p>
                  რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                  გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                  ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                  ბევრისთვის კი — ჩვენთან გადმოსვლის.
                </p>
                <hr className="h-5" />
                <p>
                  პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
                  ყოველდღიური კომუნიკაციაც გაიშვიათდა.
                </p>
              </div>

              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold font-Helvetica">
                  რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                  შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
                </h2>
                <RadioInput
                  name="non_formal_meetings"
                  label="კვირაში ორჯერ"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="non_formal_meetings"
                  label="კვირაში ერთხელ"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="non_formal_meetings"
                  label="ორ კვირაში ერთხელ"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="non_formal_meetings"
                  label="თვეში ერთხელ"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />

                <div className="h-2">
                  <ErrorMessage
                    errors={errors}
                    name={"non_formal_meetings"}
                    render={({ message }) => (
                      <p className="text-sm text-red-500 ml-3">{message}</p>
                    )}
                  />
                </div>
              </div>

              <div className="max-w-md w-full mt-10">
                <h2 className="font-bold font-Helvetica">
                  კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                </h2>
                <RadioInput
                  name="number_of_days_from_office"
                  label="0"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="number_of_days_from_office"
                  label="1"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="number_of_days_from_office"
                  label="2"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="number_of_days_from_office"
                  label="3"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="number_of_days_from_office"
                  label="4"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <RadioInput
                  name="number_of_days_from_office"
                  label="5"
                  registerOptions={{
                    required: "ამ ველის შევსება სავალდებულოა",
                  }}
                />
                <div className="h-2">
                  <ErrorMessage
                    errors={errors}
                    name={"non_formal_meetings"}
                    render={({ message }) => (
                      <p className="text-sm text-red-500 ml-3">{message}</p>
                    )}
                  />
                </div>
              </div>

              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold mb-3 font-Helvetica">
                  რას ფიქრობ ფიზიკურ შეკრებებზე?
                </h2>
                <textarea
                  {...register("what_about_meetings_in_live")}
                  rows="5"
                  className="border border-black outline-none p-2 w-full bg-transparent"
                ></textarea>
              </div>

              <div className="max-w-xl w-full mt-10">
                <h2 className="font-bold font-Helvetica">
                  რას ფიქრობ არსებულ გარემოზე:
                </h2>
                <h2 className="font-bold mb-3 font-Helvetica">
                  რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                </h2>
                <textarea
                  {...register("tell_us_your_opinion_about_us")}
                  rows="5"
                  className="border border-black outline-none p-2 w-full bg-transparent"
                ></textarea>
              </div>
              <div className="max-w-xl w-full  flex justify-end items-center mt-10">
                <button
                  type="submit"
                  className="font-bold px-5 py-2 text-white rounded-3xl bg-[#208298] "
                >
                  დასრულება
                </button>
              </div>
            </div>
            <div className="flex-2 flex justify-end items-start relative ">
              <Heart />

              <img
                className="w-8/12  absolute top-0 left-[60%] translate-x-[-50%]  "
                src="/images/four.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-center gap-20 w-full mt-20 mb-10 ">
            <button className="cursor-pointer w-20"></button>
            <button onClick={back} className="cursor-pointer w-20">
              <LeftArrow />
            </button>
          </div>
        </form>
      </FormProvider>
    </FramerMotionWrapper>
  );
};

export default CovidPolitic;
