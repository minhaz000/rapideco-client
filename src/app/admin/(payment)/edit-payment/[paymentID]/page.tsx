"use client";
import React, { useEffect, useState } from "react";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import slugify from "slugify";
import Uploder from "@/hooks/hook.upload";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import FormValues from "@/interface/payment";
import { toast } from "react-toastify";
import Image from "next/image";
import { useAdminContext } from "@/context/admin.context";
import Upload from "@/hooks/hook.upload";
const Page = ({ params }: { params: { paymentID: string[] } }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { data, refetch } = useQueryData(["single payment"], `/api/v0/payment/${params.paymentID}`);
  const newPayment = useMutationData(["add payment"], "put", `/api/v0/payment/${params.paymentID}`);
  const { watch, register, reset, handleSubmit, setValue } = useform<FormValues>();
  // console.log("currrentCategory ", currrentCategory?.data);
  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
    setValue("method_img", e.target.files);
  };
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditCategory: SubmitHandler<FormValues> = async (data) => {
    console.log("fdata", data);
    data.method_code = slugify(data.method_code, { lower: true });
    data.method_img.length > 0 && (data.method_img = await Upload(data.method_img));

    newPayment.mutate(data as any, {
      onSuccess: async () => {
        toast.success("payment updated");
        refetch().then((res) => {
          reset(res.data);
          // setCurrrentCategory(res);
          // setValue("slug", res.data.data.slug);
        });
      },
      onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    });
  };

  useEffect(() => {
    // setCurrrentCategory(data);
    reset(data?.data);
  }, [data]);
  const validationError: any = newPayment.error?.data?.errors;

  return (
    <div className="shadow-lg p-6 w-2/3 mx-auto border rounded">
      <h2 className="border-b pb-2 text-xl">Update Category information</h2>
      <form onSubmit={handleSubmit(HandleEditCategory)}>
        <div>
          <label htmlFor="name" className="mb-4 block">
            Method Name
          </label>

          <input
            {...register("method_name")}
            type="text"
            placeholder="Method Name"
            className="border w-full py-2 px-3  rounded-md outline-none"
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-2 block">
            Method Name
          </label>

          <input
            {...register("method_code")}
            type="text"
            placeholder="Method Name"
            className="border w-full py-2 px-3  rounded-md outline-none"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="">Meta description</label>
          <br />
          <textarea
            {...register("method_descrption")}
            placeholder="Meta description"
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>

        <div className="mt-4">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            {...register("payment_number")}
            type="text"
            placeholder="Meta Title"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="">Logo</label>
          <br />
          <input
            onChange={handleImage}
            name="icon"
            type="file"
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
          />

          <div className="my-3">
            <Image
              src={selectedImage ? URL.createObjectURL(selectedImage) : data?.data?.method_img.img_url}
              alt="icon"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>

        <input type="submit" value="Save" className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer" />
      </form>
    </div>
  );
};

export default Page;
