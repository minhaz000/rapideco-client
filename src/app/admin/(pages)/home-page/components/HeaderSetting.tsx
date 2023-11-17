"use client";
import { useEffect, useState } from "react";
import {
  useForm as useform,
  SubmitHandler,
  useFieldArray,
} from "react-hook-form";
import FormValues from "@/interface/settings";
import { toast } from "react-toastify";
import axios from "axios";
import Uploder from "@/hooks/hook.upload";

const HeaderSetting = ({ setting }: { setting: any }) => {
  const [menuItem, setMenuItem] = useState(1);
  const { control, register, reset, handleSubmit, setValue, getValues } =
    useform<FormValues>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "header.nav_menu",
  });
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditHeader: SubmitHandler<FormValues> = async (data: any) => {
    data.header.logo.length > 0
      ? (data.header.logo = await Uploder(data.header.logo))
      : delete data.header.logo;
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
      <form
        onSubmit={handleSubmit(HandleEditHeader)}
        className="border mt-10 py-6 px-4 lg:px-10"
      >
        <div className="md:flex gap-5">
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-3 text-sm">
              Logo Upload
            </label>
            <input
              {...register("header.logo")}
              type="file"
              className="w-full py-1 px-1 rounded border"
            />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-2 text-sm">
              Header Color
            </label>
            <input
              {...register("header.color")}
              type="color"
              className="w-full h-10 rounded border"
            />
          </div>
        </div>
        <div className="md:flex gap-5 mt-3">
          <div className="md:basis-1/2">
            <label htmlFor="logo" className="block mb-2 text-sm">
              Meta Title
            </label>
            <input
              {...register("header.meta_title")}
              className="w-full p-2 rounded border"
            />
          </div>
          <div className="md:basis-1/2">
            <label htmlFor="theme" className="block mb-3 text-sm">
              Meta description
            </label>
            <textarea
              {...register("header.meta_description")}
              placeholder="Meta description"
              className="w-full border p-2 outline-none  h-28"
            ></textarea>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 capitalize">
          <h2 className="text-sm mb-2">Header nav menu</h2>

          {fields.map((item, i: any) => (
            <div
              className="flex justify-between gap-3 items-center mb-3"
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
      </form>
    </div>
  );
};

export default HeaderSetting;
