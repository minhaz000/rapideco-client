"use client";
import { useState, useEffect } from "react";
import {
  useForm as useform,
  SubmitHandler,
  useFieldArray,
} from "react-hook-form";
import FormValues from "@/interface/settings";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import Uploder from "@/hooks/hook.upload";
import { useAdminContext } from "@/context/admin.context";
const BodySetting = ({ setting }: { setting: any }) => {
  const [pageMenu, setpageMenu] = useState([]);
  const { Categories }: any = useAdminContext();
  const [oldGalleryImage, setOldGalleryImage] = useState([]);
  const [selectedGalleryImage, setSelectedGalleryImage]: any = useState([]);
  const { control, register, reset, handleSubmit, setValue, getValues } =
    useform<FormValues>();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "body.cat_menu",
  });
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleEditBody: SubmitHandler<FormValues> = async (data) => {
    const gallery_images = await Uploder(selectedGalleryImage, "arry");
    data.body.banner = gallery_images
      ? [...oldGalleryImage, ...gallery_images]
      : [...oldGalleryImage];
    axios.post("/api/siteconfig", data).then((res) => {
      toast.success("site updated");
      setting.refetch();
    });
  };
  const handlePageItem = (e: any) => {
    e.preventDefault();
    append({ value: "", lavel: "" });
  };
  const handleRemove = (i: number) => {
    remove(i);
  };
  const handleGalleyImage = (event: any) => {
    const selectedFiles: any = [...event.target.files, ...selectedGalleryImage];
    setSelectedGalleryImage(selectedFiles);
    event.target.value = "";
  };
  const deleteHandler = (image: any) => {
    setOldGalleryImage(oldGalleryImage.filter((e) => e !== image));
    setSelectedGalleryImage(
      selectedGalleryImage.filter((e: any) => e !== image)
    );
  };
  useEffect(() => {
    reset(setting.data);
    setOldGalleryImage(setting?.data.body?.banner);
  }, [setting]);

  return (
    <>
      <form
        onSubmit={handleSubmit(HandleEditBody)}
        className="border mt-5 py-6 px-4 lg:px-10"
      >
        <div>
          <label htmlFor="logo" className="block mb-3 text-lg font-semibold">
            Banner Slider (1180 * 400)
          </label>
          <input
            {...register("body.banner")}
            type="file"
            multiple
            className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
            onChange={handleGalleyImage}
          />
          <div className="flex gap-2 my-3">
            {oldGalleryImage &&
              oldGalleryImage.map((image: any, i: number) => {
                return (
                  <div key={i} className="relative">
                    <Image
                      src={image?.img_url}
                      width={100}
                      height={100}
                      alt="upload"
                    />
                    <button
                      className="absolute top-0 right-0 bg-red-400 text-white px-1"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(image);
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            {selectedGalleryImage &&
              selectedGalleryImage.map((image: any, i: number) => {
                return (
                  <div key={i} className="relative">
                    <Image
                      src={URL.createObjectURL(image as any)}
                      width={100}
                      height={100}
                      alt="upload"
                    />
                    <button
                      className="absolute top-0 right-0 bg-red-400 text-white px-1"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(image);
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-6 capitalize">
          {fields.map((item, i: any) => (
            <div
              className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-3"
              key={i}
            >
              <input
                {...register(`body.cat_menu.${i}.lavel`)}
                type="text"
                className="basis-3/12 border rounded outline-none py-2 px-2"
                placeholder="Lavel"
              />
              <select
                className="basis-8/12 border rounded outline-none py-2 px-2"
                {...register(`body.cat_menu.${i}.value`)}
              >
                {Categories?.data?.data.map((item: any) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
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
            className=" bg-gray-200 py-1 px-3 rounded text-[12px] mt-[7px]"
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
    </>
  );
};

export default BodySetting;
