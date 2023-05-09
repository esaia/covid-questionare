import React from "react";
import { RightArrow, Input } from "@/components";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContextVariables } from "@/hooks";

const PersonalInformation = () => {
  const form = useForm({
    defaultValues: { name: "", username: "", email: "safsdsfa@redberry.ge" },
  });
  const { handleSubmit, control, register } = form;
  const { setCurrentPage } = useContextVariables();

  const submitForm = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex mt-3 justify-between ">
          <div className="flex-1 ">
            <div action="" className="max-w-md w-full mt-10">
              <Input
                name="name"
                label="სახელი*"
                placeholder="იოსებ"
                useFormAttributes={{
                  ...register("name", {
                    required: "ამ ველის შევსება სავალდებულოა",
                    minLength: {
                      value: 2,
                      message:
                        "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
                    },
                  }),
                }}
              />
              <Input
                name="username"
                label="გვარი*"
                useFormAttributes={{
                  ...register("username", {
                    required: "ამ ველის შევსება სავალდებულოა",
                    minLength: {
                      value: 2,
                      message:
                        "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
                    },
                  }),
                }}
              />
              <Input
                name="email"
                label="მეილი*"
                useFormAttributes={{
                  ...register("email", {
                    required: "ამ ველის შევსება სავალდებულოა",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                      message:
                        "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
                    },
                  }),
                }}
              />
            </div>

            <div className="mt-20">
              <hr width="50%" className=" bg-gray-500 h-[2px] mb-3" />
              <p className="w-72 text-gray-400 text-sm">
                *-ით მონიშნული ველების შევსება სავალდებულოა
              </p>
            </div>
          </div>
          <div className="flex-2 flex justify-end items-start ">
            <img className="w-10/12  " src="/images/one.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center gap-20 w-full ">
          <button className="cursor-pointer ">
            <RightArrow />
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
};

export default PersonalInformation;
