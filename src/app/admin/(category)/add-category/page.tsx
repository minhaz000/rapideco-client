"use client";
import React, { useState } from "react";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import slugify from "slugify";
import Uploder from "@/hooks/hook.upload";
import { useMutationData } from "@/hooks/hook.query";
import FormValues from "@/interface/category";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
import Image from "next/image";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState({
    icon: null,
    imgURL: null,
  });
  const { Categories }: any = useAdminContext();
  const newCategory = useMutationData<FormValues>(
    ["add Category"],
    "post",
    "/api/v0/category"
  );
  const { watch, register, reset, handleSubmit, setValue } =
    useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddCategory: SubmitHandler<FormValues> = async (data: any) => {
    data.slug = slugify(data.name, { lower: true });
    data?.icon?.length > 0
      ? (data.icon = await Uploder(data.icon))
      : delete data.icon;
    data?.imgURL?.length > 0
      ? (data.imgURL = await Uploder(data.imgURL))
      : delete data.imgURL;
    data.parentID === "null" && delete data.parentID;
    newCategory.mutate(data as any, {
      onSuccess: () => {
        toast.success("Category added!!");
        Categories.refetch();
        setSelectedImage({ icon: null, imgURL: null });
        reset();
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };

  const handleImage = (e: any) => {
    setSelectedImage({ ...selectedImage, [e.target.name]: e.target.files[0] });
    setValue(e.target.name, e.target.files);
  };

  const validationError = newCategory.error?.data.errors;

  return (
    <div className="shadow-lg p-6 lg:w-2/3 mx-auto border rounded">
      <h2 className="border-b pb-2 text-xl">Category information</h2>
      <form onSubmit={handleSubmit(HandleAddCategory)}>
        <div className="mt-4">
          <label htmlFor="">Name</label>
          <br />
          <input
            {...register("name")}
            type="text"
            placeholder="Enter name"
            className={`w-full border py-2 px-3 outline-none mt-2 ${
              validationError?.name && "border-red-600 text-red-400"
            }`}
          />
          {validationError?.name && (
            <p className="text-red-600 text-[14px]  mb-[5px] text-right">
              {validationError.name.message}
            </p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="">Slug</label>
          <br />
          <input
            disabled
            {...register("slug")}
            type=""
            value={slugify(watch("name") ?? " ", { lower: true })}
            placeholder="slug"
            className={`w-full border py-2 px-3 outline-none mt-2 ${
              validationError?.slug && "border-red-600 text-red-400"
            }`}
          />
          {validationError?.slug && (
            <p className="text-red-600 text-[14px]  mb-[5px] text-right">
              {validationError.slug.message}
            </p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="">Parent Category</label>
          <br />
          <select
            {...register("parentID")}
            className="w-full border py-2 px-3 outline-none mt-2"
          >
            <option value="null">No parent</option>
            {Categories.data?.data?.map((item: any) => {
              return (
                <>
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="">Icon (32x32)</label>
          <br />
          <input
            onChange={handleImage}
            name="icon"
            type="file"
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
          />
          {selectedImage.icon && (
            <div className="my-3">
              <Image
                src={URL?.createObjectURL(selectedImage?.icon)}
                alt="icon"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="">Cover image (250x250)</label>
          <br />
          <input
            onChange={handleImage}
            name="imgURL"
            type="file"
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
          />
          {selectedImage.imgURL && (
            <div className="my-3">
              <Image
                src={URL?.createObjectURL(selectedImage?.imgURL)}
                alt="icon"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          )}
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
        <input
          type="submit"
          value="Save"
          className="bg-blue-500 px-8 mt-3 py-2 rounded text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Page;
