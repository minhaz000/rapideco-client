"use client";
import React, { useEffect, useState } from "react";
// import Router from "next/navigation";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import slugify from "slugify";
import Uploder from "@/hooks/hook.upload";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import FormValues from "../../../../../interface/category";
import { toast } from "react-toastify";
import Image from "next/image";
import { useAdminContext } from "@/context/admin.context";
const Page = ({ params }: { params: { categoryID: string[] } }) => {
  const [selectedImage, setSelectedImage] = useState({
    icon: null,
    imgURL: null,
  });
  const { Categories }: any = useAdminContext();
  const { data, refetch } = useQueryData(
    ["single Category"],
    `/api/v0/category/${params.categoryID}`
  );
  const updateCategory = useMutationData(
    ["add Category"],
    "put",
    `/api/v0/category/${params.categoryID}`
  );
  const { watch, register, reset, handleSubmit, setValue } =
    useform<FormValues>();
  // console.log("currrentCategory ", currrentCategory?.data);
  const handleImage = (e: any) => {
    setSelectedImage({ ...selectedImage, [e.target.name]: e.target.files[0] });
    setValue(e.target.name, e.target.files);
  };
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditCategory: SubmitHandler<FormValues> = async (fdata: any) => {
    fdata.icon?.length > 0
      ? (fdata.icon = await Uploder(fdata.icon))
      : delete fdata.icon;
    fdata.imgURL?.length > 0
      ? (fdata.imgURL = await Uploder(fdata.imgURL))
      : delete fdata.imgURL;
    fdata.parentID === "null" && delete fdata.parentID;
    fdata.slug = slugify(fdata.name, { lower: true });

    console.log("fdata", fdata);
    // console.log("heko", newdata);

    updateCategory.mutate(fdata, {
      onSuccess: async () => {
        toast.success("category updated");
        refetch().then((res) => {
          reset(res.data);
          // setCurrrentCategory(res);
          // setValue("slug", res.data.data.slug);
        });

        Categories.refetch();
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };
  useEffect(() => {
    // setCurrrentCategory(data);
    reset(data?.data);
  }, [data]);
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
            // defaultValue={currrentCategory?.data?.name}
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
            type="text"
            // defaultValue={currrentCategory?.data.slug}
            value={watch("name") && slugify(watch("name"), { lower: true })}
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
            <option value="null">{data?.data.parent_info?.name}</option>
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
          <input
            onChange={handleImage}
            name="icon"
            type="file"
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
          />
          <div className="my-3">
            <Image
              src={
                selectedImage.icon
                  ? URL?.createObjectURL(selectedImage?.icon)
                  : data?.data.icon?.img_url
              }
              alt="icon"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Cover image (250x250)</label>
          <br />
          <input
            onChange={handleImage}
            type="file"
            name="imgURL"
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
          />
          {/* <input {...register("imgURL")} type="file" className="w-full border py-2 px-3 outline-none mt-2" /> */}
          <div className="my-3">
            <Image
              src={
                selectedImage.imgURL
                  ? URL?.createObjectURL(selectedImage?.imgURL)
                  : data?.data.imgURL?.img_url
              }
              alt="thumbnail"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
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
            // defaultValue={currrentCategory?.data?.meta_description}
            placeholder="Meta description"
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Save"
          className="bg-sky-800 px-8 mt-3 py-2 rounded text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Page;
