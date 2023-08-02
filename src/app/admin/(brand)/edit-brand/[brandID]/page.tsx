"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useQueryData } from "@/hooks/hook.query";
import { toast } from "react-toastify";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "../../brand";
import Uploder from "@/hooks/hook.upload";
import { useAdminContext } from "@/context/admin.context";
import { useMutationData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";
const EditBrand = ({ params }: { params: { brandID: string[] } }) => {
  const { Brands: allBrands }: any = useAdminContext("/api/v0/brands");
  const { data: oldBrand, refetch } = useQueryData(["get single brand"], `/api/v0/brand/${params.brandID}`);
  const updateBrand = useMutationData(["update new brand"], "put", `/api/v0/brand/${params.brandID}`);
  const [selectedBrand, setSelectedBrand] = useState("");
  const { register, reset, handleSubmit } = useform<FormValues>({
    defaultValues: async (): Promise<FormValues> => {
      const res = await axios.get(`/api/v0/brand/${params.brandID}`);
      return res.data.data;
    },
  });

  // =============== FUNCTION FOR THE UPDATE BRAND
  const HandleUpdateBrand: SubmitHandler<FormValues> = async (data) => {
    data.imgURL.length > 0 ? (data.imgURL = await Uploder(data.imgURL)) : null;
    updateBrand.mutate(data, {
      onSuccess: () => {
        toast.success("brand updated");
        refetch().then((res) => {
          setSelectedBrand(res.data.data.imgUrl.img_url);
        });

        allBrands.refetch();
        refetch();
      },
      onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    });
  };

  const handleBrand = (e: any) => {
    const icon: any = URL.createObjectURL(e.target.files[0]);
    setSelectedBrand(icon);
  };
  return (
    <div className="shadow-[0_0_10px_5px_#d7d7d7bf] px-6 py-8 lg:mx-10">
      <form onSubmit={handleSubmit(HandleUpdateBrand)}>
        <div>
          <label htmlFor="name" className="mb-2 block">
            Brand Name
          </label>

          <input
            type="text"
            {...register("name")}
            defaultValue={oldBrand?.data.name}
            className="border w-full py-2 px-3  rounded-md outline-none"
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-2 mt-1 block">
            Brand Email
          </label>

          <input
            type="text"
            {...register("email")}
            defaultValue={oldBrand?.data.email}
            className="border w-full py-2 px-3  rounded-md outline-none"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="name" className="mb-2 block">
            Logo
          </label>

          <input
            {...register("imgURL")}
            type="file"
            className="border w-full py-2 px-3  rounded-md outline-none"
            onChange={handleBrand}
          />
          <div className="relative inline-block mt-2">
            <Image
              src={selectedBrand ? selectedBrand : oldBrand?.data?.imgURL?.img_url}
              alt=""
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            type="text"
            {...register("meta_title")}
            defaultValue={oldBrand?.data?.meta_title}
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta description</label>
          <br />
          <textarea
            {...register("meta_description")}
            defaultValue={oldBrand?.data?.meta_description}
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>
        <input type="submit" value="Save" className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer" />
      </form>
    </div>
  );
};

export default EditBrand;
