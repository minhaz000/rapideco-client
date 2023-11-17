"use client";

import { useEffect, useState } from "react";
import { useForm as useform, SubmitHandler, useFieldArray } from "react-hook-form";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import FormValues from "@/interface/settings";
import { toast } from "react-toastify";
import Uploder from "@/hooks/hook.upload";
import axios from "axios";

const FooterSetting = ({ setting }: { setting: any }) => {
  const [pageItem, setPageItem] = useState(1);
  const { control, register, reset, handleSubmit } = useform<FormValues>();
  const { append, remove, fields } = useFieldArray({ control, name: "footer.links" });

  const handlePageItem = (e: any) => {
    e.preventDefault();
    append({ value: "", lavel: "" });
  };
  const HandleEditFooter: SubmitHandler<FormValues> = async (data) => {
    data.footer.logo.length > 0 ? (data.footer.logo = await Uploder(data.footer.logo)) : delete data.footer.logo;
    axios.post("/api/siteconfig", data).then((res) => {
      toast.success("site updated");
    });
  };
  const handleRemove = (i: number) => {
    remove(i);
  };
  useEffect(() => {
    reset(setting);
  }, [setting]);
  return (
    <div className="border mt-5 py-6 px-4 lg:px-10">
      <h2 className="text-sm mb-2">Footer Widget</h2>
      <div className="lg:flex gap-5 mt-5">
        <div className="lg:basis-1/2 border p-3">
          <h3 className="text-sm border-b pb-2 mb-3">About Widget</h3>
          <form onSubmit={handleSubmit(HandleEditFooter)}>
            <>
              <label className="text-[12px] block mb-1">Footer Logo</label>
              <input {...register("footer.logo")} type="file" className="border py-1 px-2 w-full" />
            </>
            <div className="mt-4">
              <label className="text-[12px] block mb-1">About description</label>
              <textarea
                {...register("footer.description")}
                className="border py-1 px-2 w-full h-24 outline-none"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="text-[12px] block mb-[6px]">Social Links</label>
              <div className="flex items-center">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaFacebookF />
                </span>
                <input type="text" className="border py-1 px-2 w-full outline-none" placeholder="www.facebook.com" />
              </div>
              <div className="flex items-center mt-3">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaLinkedinIn />
                </span>
                <input type="text" className="border py-1 px-2 w-full outline-none" placeholder="www.linkedin.com" />
              </div>
              <div className="flex items-center mt-3">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaWhatsapp />
                </span>
                <input type="text" className="border py-1 px-2 w-full outline-none" placeholder="www.whatsapp.com" />
              </div>
            </div>
            <input
              className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
              type="submit"
              value="Update"
            />
          </form>
        </div>
        <div className="lg:basis-1/2 ">
          <div className="border p-3">
            <h3 className="text-sm border-b pb-2 mb-3">Contact Info Widget</h3>
            <form onSubmit={handleSubmit(HandleEditFooter)}>
              <>
                <label className="text-[12px] block mb-1">Contact address</label>
                <input
                  {...register("footer.contact_info.address")}
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="Demo"
                />
              </>
              <div className="mt-3">
                <label className="text-[12px] block mb-1">Contact phone</label>
                <input
                  {...register("footer.contact_info.phone")}
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="14520658"
                />
              </div>
              <div className="mt-3">
                <label className="text-[12px] block mb-1">Contact email</label>
                <input
                  {...register("footer.contact_info.email")}
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="14520658"
                />
              </div>
              <input
                className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border pt-6 capitalize px-4 pb-4">
        <h2 className="text-sm mb-2">Link Widget</h2>
        <form onSubmit={handleSubmit(HandleEditFooter)}>
          <label className="text-[12px] block mb-1">Title </label>
          <input type="text" defaultValue="Quick Links" className="w-full border rounded outline-none py-1 px-2 mb-4" />
          <label className="text-[12px] block mb-1">Links</label>
          {fields.map((item, i: any) => (
            <div className="flex justify-between gap-3 items-center mb-3" key={i}>
              <input
                {...register(`footer.links.${i}.lavel`)}
                type="text"
                className="basis-3/12 border rounded outline-none py-2 px-2"
                placeholder="Lavel"
              />
              <input
                type="text"
                {...register(`footer.links.${i}.lavel`)}
                className="basis-8/12 border rounded outline-none py-2 px-2"
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
          <button onClick={handlePageItem} className=" bg-gray-200 py-1 px-3 rounded text-[12px] mt-[7px]">
            Add New
          </button>
          <input
            type="submit"
            value="Update"
            className="bg-blue-600 block text-white px-6 py-[6px] mt-4 rounded-md cursor-pointer ml-auto"
          />
        </form>
      </div>

      <div className="mt-8 border pt-6 capitalize px-4 pb-4">
        <h2 className="text-sm mb-3 border-b pb-2">Copyright Widget</h2>
        <form onSubmit={handleSubmit(HandleEditFooter)}>
          <label className="text-[12px] block mb-1">Copyright Text</label>

          <textarea
            {...register("footer.copyright")}
            className="w-full border rounded outline-none py-1 px-2 mb-4 h-28  text-sm"
            defaultValue="Rabipeco eCommerce CMS 2023"
          ></textarea>
          <input
            type="submit"
            value="Update"
            className="bg-blue-600 block text-white px-6 py-[6px] mt-4 rounded-md cursor-pointer ml-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default FooterSetting;
