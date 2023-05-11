import React from "react";
import { LeftArrow, RadioInput } from "@/components";
import { FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useCovidPolitic from "./useCovidPolitic";

const CovidPolitic = () => {
  const { form, handleSubmit, control, register, submitForm, back } =
    useCovidPolitic();

  return (
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
                name="meetingFrequency"
                label="კვირაში ორჯერ"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="meetingFrequency"
                label="კვირაში ერთხელ"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="meetingFrequency"
                label="ორ კვირაში ერთხელ"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="meetingFrequency"
                label="თვეში ერთხელ"
                registerOptions={{
                  required: true,
                }}
              />
            </div>

            <div className="max-w-md w-full mt-10">
              <h2 className="font-bold font-Helvetica">
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </h2>
              <RadioInput
                name="remoteWorkDay"
                label="0"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="remoteWorkDay"
                label="1"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="remoteWorkDay"
                label="2"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="remoteWorkDay"
                label="3"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="remoteWorkDay"
                label="4"
                registerOptions={{
                  required: true,
                }}
              />
              <RadioInput
                name="remoteWorkDay"
                label="5"
                registerOptions={{
                  required: true,
                }}
              />
            </div>

            <div className="max-w-xl w-full mt-10">
              <h2 className="font-bold mb-3 font-Helvetica">
                რას ფიქრობ ფიზიკურ შეკრებებზე?
              </h2>
              <textarea
                {...register("physicalMeetings")}
                rows="5"
                className="border border-black outline-none p-2 w-full"
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
                {...register("whatWouldYouChange")}
                rows="5"
                className="border border-black outline-none p-2 w-full"
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
          <div className="relative">
            <div className="flex-2 flex justify-end items-start sticky top-3 right-0">
              <img className="w-10/12  " src="/images/four.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-center gap-20 w-full mt-20 mb-10 ">
          <button className="cursor-pointer w-20"></button>
          <button onClick={back} className="cursor-pointer w-20">
            <LeftArrow />
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
};

export default CovidPolitic;
