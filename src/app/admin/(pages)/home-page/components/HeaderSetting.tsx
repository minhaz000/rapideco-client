"use client";
import { useEffect, useState } from "react";
import { useForm as useform, SubmitHandler, useFieldArray } from "react-hook-form";
import FormValues from "@/interface/settings";
import { toast } from "react-toastify";
import axios from "axios";
import Uploder from "@/hooks/hook.upload";
import Image from "next/image";

const HeaderSetting = ({ setting }: { setting: any }) => {
  const [menuItem, setMenuItem] = useState(1);
  console.log(setting);
  const { control, register, reset, handleSubmit, setValue, getValues } = useform<FormValues>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "header.nav_menu",
  });
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditHeader: SubmitHandler<FormValues> = async (data: any) => {
    data.header.logo.length > 0 ? (data.header.logo = await Uploder(data.header.logo)) : data.header.logo;
    data.header.favicon.length > 0 ? (data.header.favicon = await Uploder(data.header.favicon)) : data.header.favicon;

    axios.post("/api/siteconfig", data).then((res) => {
      toast.success("site updated");
    });
  };
  const handlePageItem = (e: any) => {
    e.preventDefault();
    append({ value: "", lavel: "" });
  };
  const handleRemove = (i: number) => {
    remove(i);
  };
  useEffect(() => {
    reset(setting);
  }, [setting]);

  return (
    <div>
      <form onSubmit={handleSubmit(HandleEditHeader)} className="border mt-5 py-6 px-4 lg:px-10">
        <div className="md:flex gap-5">
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-3 text-sm">
              Logo Upload
            </label>
            <input {...register("header.logo")} type="file" className="w-full py-1 px-1 rounded border" />
            <Image src={setting?.header?.logo?.img_url} width={100} height={100} alt="" />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-3 text-sm">
              FavIcon
            </label>
            <input {...register("header.favicon")} type="file" className="w-full py-1 px-1 rounded border" />
          </div>
        </div>
        <div className="md:flex gap-5 mt-3">
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-2 text-sm">
              Phone Number
            </label>
            <input {...register("header.phone_number")} className="w-full p-2 rounded border" />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-2 text-sm">
              Meta Title
            </label>
            <input {...register("header.meta_title")} className="w-full p-2 rounded border" />
          </div>
        </div>
        <div className="md:flex gap-5 mt-3">
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-2 text-sm">
              Header Color
            </label>
            <input {...register("header.color")} type="color" className="w-full h-10 rounded border outline-none" />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-2 text-sm">
              Text Color
            </label>
            <input {...register("header.textColor")} type="color" className="w-full h-10 rounded border outline-none" />
          </div>
        </div>
        <div className="md:flex gap-5 mt-3">
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-2 text-sm">
              Theme Color
            </label>
            <input
              {...register("header.themeColor")}
              type="color"
              className="w-full h-10 rounded border outline-none"
            />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-3 text-sm">
              Meta description
            </label>
            <input
              {...register("header.meta_description")}
              type="text"
              className="w-full p-2 rounded border outline-none"
            />
          </div>
        </div>
        <div className="mt-10 border-t pt-6 capitalize">
          <h2 className="text-sm mb-2">Header nav menu</h2>

          {fields.map((item, i: any) => (
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-3" key={i}>
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
          <button onClick={handlePageItem} className=" bg-gray-200 py-2 px-3 rounded text-[12px] mt-[7px]">
            Add New
          </button>
          <input
            type="submit"
            value="Update"
            className="bg-blue-600 block text-white px-6 py-[6px] mt-4 rounded-md cursor-pointer ml-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default HeaderSetting;
