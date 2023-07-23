"use client";
import React, { useEffect, useState } from "react";
import { useForm as useform, Controller, SubmitHandler } from "react-hook-form";
import slugify from "slugify";
import Uploder from "@/hooks/hook.upload";
import { useQueryData, useMutationData } from "@/hooks/hook.query";
import FormValues from "../category";
import { UseQueryOptions } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
const Page = () => {
  const { data: categories, refetch } = useQueryData(["categories"], "/api/v0/categories");
  const newCategory = useMutationData(["categories"], "post", "/api/v0/category");
  const { watch, register, handleSubmit } = useform<FormValues>({
    defaultValues: {
      name: " ",
    },
  });
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddCategory: SubmitHandler<FormValues> = async (data) => {
    data.icon = await Uploder(data.icon);
    data.imgURL = await Uploder(data.imgURL);
    newCategory.mutate(data);
    refetch;
  };

  newCategory.isError && toast.error(newCategory.failureReason?.message);
  newCategory.isSuccess && toast.success("category added");

  return (
    <div className="shadow-lg p-6 w-2/3 mx-auto border rounded">
      <h2 className="border-b pb-2 text-xl">Category information</h2>
      <form onSubmit={handleSubmit(HandleAddCategory)}>
        {/* {console.log(slugify(watch("name") || " "))}
        {console.log(watch("name"))} */}
        <div className="mt-4">
          <label htmlFor="">Name</label>
          <br />
          <input
            {...register("name")}
            type="text"
            placeholder="Enter name"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Slug</label>
          <br />
          <input
            disabled
            {...register("slug")}
            type=""
            value={slugify(watch("name"), { lower: true })}
            placeholder="slug"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Parent Category</label>
          <br />
          <select {...register("parentID")} className="w-full border py-2 px-3 outline-none mt-2">
            <option value="null">No parent</option>
            {categories?.data?.map((item: any) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="">Icon (32x32)</label>
          <br />
          <input {...register("icon")} type="file" className="w-full border py-2 px-3 outline-none mt-2" />
        </div>
        <div className="mt-4">
          <label htmlFor="">Cover image (250x250)</label>
          <br />
          <input {...register("imgURL")} type="file" className="w-full border py-2 px-3 outline-none mt-2" />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            {...register("meta_title")}
            type="text"
            placeholder="Meta Title"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta description</label>
          <br />
          <textarea
            {...register("meta_description")}
            placeholder="Meta description"
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>
        <input type="submit" value="Save" className="bg-sky-800 px-8 mt-3 py-2 rounded text-white cursor-pointer" />
      </form>
    </div>
  );
};

export default Page;