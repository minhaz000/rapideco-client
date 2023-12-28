"use client";
import React from "react";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "../../../../interface/attributes";
import slugify from "slugify";
import { useMutationData } from "@/hooks/hook.query";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
const AttributeAdd = () => {
  const { Atrribute }: any = useAdminContext();
  const { register, reset, handleSubmit } = useform<FormValues>();
  const newBrand = useMutationData(
    ["add new attribute"],
    "post",
    "api/v0/attribute"
  );
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddAtrribute: SubmitHandler<FormValues> = async (data) => {
    data.value = slugify(data.label, { lower: true });
    newBrand.mutate(data as any, {
      onSuccess: () => {
        toast.success("atrribute added");
        Atrribute.refetch();
        reset();
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };
  return (
    <div className="lg:basis-5/12 shadow-[0_0_10px_5px_#d7d7d7bf] pb-6">
      <h2 className="border px-6 py-4 text-xl font-semibold">
        Add New Attributes
      </h2>
      <div className="px-6 pt-4">
        <form onSubmit={handleSubmit(HandleAddAtrribute)}>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Attributes Name
            </label>

            <input
              {...register("label")}
              type="text"
              placeholder="Attribute name"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <input
            type="submit"
            value="Save"
            className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AttributeAdd;
