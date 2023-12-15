"use client"
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import FormValues from "@/interface/settings";
const page = () => {
  const { control, register, reset, handleSubmit, setValue, getValues } =
    useForm<FormValues>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "header.nav_menu",
  });
  const handlePageItem = (e: any) => {
    e.preventDefault();
    append({ value: "", lavel: "" });
  };
  const handleRemove = (i: number) => {
    remove(i);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mt-10 border-t pt-6 capitalize">
          <h2 className="text-sm mb-2">Shipping Details</h2>
          {fields.map((item, i: any) => (
            <div
              className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-3"
              key={i}
            >
              <input
                {...register(`header.nav_menu.${i}.lavel`)}
                type="text"
                className="basis-3/12 border rounded outline-none py-2 px-2"
                placeholder="Lavel"
              />
              <input
                type="text"
                {...register(`header.nav_menu.${i}.value`)}
                className="basis-8/12 border rounded outline-none py-3 px-3"
                placeholder="Link with http:// Or https://"
              />
              <button
                className=" bg-red-500 bg-opacity-20 rounded-full w-8 h-8 text-red-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemove(i);
                }}
              >
                X
              </button>
            </div>
          ))}
          <button
            onClick={handlePageItem}
            className=" bg-gray-200 py-2 px-3 rounded text-[12px] mt-[7px]"
          >
            Add New
          </button>
          <input
            type="submit"
            value="Update"
            className="bg-blue-600 block text-white px-6 py-[6px] mt-4 rounded-md cursor-pointer ml-auto"
          />
        </div>
      </div>
    </form>
  );
};

export default page;
