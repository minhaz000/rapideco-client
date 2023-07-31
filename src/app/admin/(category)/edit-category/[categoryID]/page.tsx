"use client";
import React, { useEffect } from "react";
// import Router from "next/navigation";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import slugify from "slugify";
import Uploder from "@/hooks/hook.upload";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import FormValues from "../../category";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
import { useRouter } from "next/navigation";
import axios from "@/hooks/hook.axios";
const Page = ({ params }: { params: { categoryID: string[] } }) => {
  const { Categories }: any = useAdminContext();
  const { data: currrentCategory, refetch } = useQueryData(
    ["single Category"],
    `/api/v0/category/${params.categoryID}`
  );
  const updateCategory = useMutationData(["add Category"], "put", `/api/v0/category/${params.categoryID}`);
  const { watch, register, reset, handleSubmit, setValue } = useform<FormValues>({
    defaultValues: async (): Promise<FormValues> => {
      const res = await axios.get(`/api/v0/category/${params.categoryID}`);
      return res.data;
    },
  });
  console.log("currrentCategory ", currrentCategory?.data);

  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditCategory: SubmitHandler<FormValues> = async (data: any) => {
    data.slug = slugify(data.name, { lower: true });
    data.icon.length < 1 ? (data.icon = await Uploder(data.icon)) : (data.icon = currrentCategory.data.icon);
    data.imgURL.length < 1 ? (data.imgURL = await Uploder(data.imgURL)) : (data.icon = currrentCategory.data.imgURL);
    data.parentID === "null" && delete data.parentID;

    console.log(data);
    updateCategory.mutate(data, {
      onSuccess: async () => {
        toast.success("category updated");
        reset();
        refetch().then((res) => {
          setValue("slug", res.data.data.slug);
        });
        Categories.refetch();
      },
      onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    });
  };

  const validationError: any = updateCategory.error?.data?.errors;

  return (
    <div className="shadow-lg p-6 w-2/3 mx-auto border rounded">
      <h2 className="border-b pb-2 text-xl">Update Category information</h2>
      <form onSubmit={handleSubmit(HandleEditCategory)}>
        <div className="mt-4">
          <label htmlFor="">Name</label>
          <br />
          <input
            {...register("name")}
            type="text"
            defaultValue={currrentCategory?.data.name}
            placeholder="Enter name"
            className={`w-full border py-2 px-3 outline-none mt-2 ${
              validationError?.name && "border-red-600 text-red-400"
            }`}
          />
          {validationError?.name && (
            <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.name.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="">Slug</label>
          <br />
          <input
            disabled
            {...register("slug")}
            type="text"
            // defaultValue={currrentCategory?.data.slug}
            value={watch("name") && slugify(watch("name"), { lower: true })}
            placeholder="slug"
            className={`w-full border py-2 px-3 outline-none mt-2 ${
              validationError?.slug && "border-red-600 text-red-400"
            }`}
          />
          {validationError?.slug && (
            <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.slug.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="">Parent Category</label>
          <br />
          <select {...register("parentID")} className="w-full border py-2 px-3 outline-none mt-2">
            <option value="null">{currrentCategory?.parent_info?.name}</option>
            {Categories.data?.data?.map((item: any) => {
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
            defaultValue={currrentCategory?.data.meta_title}
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
            defaultValue={currrentCategory?.data.meta_description}
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
