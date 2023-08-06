"use client";
import JoditEditor from "jodit-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormValues from "@/interface/product";
import { useAdminContext } from "@/context/admin.context";
import axios from "@/hooks/hook.axios";
import { toast } from "react-toastify";
import Uploder from "@/hooks/hook.upload";
import { useMutationData } from "@/hooks/hook.query";
const AddProduct = () => {
  const { Categories, Brands, Atrribute, Products }: any = useAdminContext();
  const newProduct = useMutationData(["add new prodct"], "post", "api/v0/product");

  const [selectedImage, setSelectedImage] = useState();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();

  // =============== IMAGE HANDLEING

  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleGalleyImage = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file as any);
    });
    setSelectedGalleryImage((previousImages: any) => previousImages.concat(imagesArray as any));
    event.target.value = "";
  };

  function deleteHandler(image: any) {
    setSelectedGalleryImage(selectedGalleryImage.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  console.log("grally ", selectedGalleryImage);
  const HandleAddProduct: SubmitHandler<FormValues> = async (data) => {
    // data.gallery_images = await Uploder(data.gallery_images);
    // data.product_image = await Uploder(data.product_image);
    data.status ? (data.status = "active") : (data.status = "deactive");
    data.category_info = data.category_info && JSON.parse(data.category_info);
    data.brand_info = data.brand_info && JSON.parse(data.brand_info);
    // console.log("product ", data.product_image);
    // console.log("grally ", data.gallery_images);
    // console.log("grally ", selectedGalleryImage);
    console.log(data);
    // console.log(data.product_image);.
    // newProduct.mutate(data as any, {
    //   onSuccess: () => {
    //     toast.success("product added");
    //     Products.refetch();
    //     reset();
    //   },
    //   onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    // });
  };
  const validationError: any = newProduct.error?.data.errors;
  return (
    <div className="pb-4">
      <h2 className="text-2xl">Add Product</h2>
      <div className="mt-6">
        <form onSubmit={handleSubmit(HandleAddProduct)}>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Product Title
            </label>

            <input
              {...register("title")}
              type="text"
              placeholder="Enter product name"
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.title && "border-red-600 text-red-400"
              }`}
            />
            {validationError?.title && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.title.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Product Code
            </label>

            <input
              {...register("code")}
              type="text"
              placeholder="Enter product name"
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.code && "border-red-600 text-red-400"
              }`}
            />
            {validationError?.code && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.code.message}</p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Short Description
            </label>

            <JoditEditor onChange={(data) => setValue("short_description", data)} value={""} />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Full Description
            </label>
            <JoditEditor value={""} onChange={(data) => setValue("description", data)} />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Regular Price
            </label>

            <input
              {...register("regular_price")}
              type="number"
              placeholder="Enter regular price"
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.regular_price && "border-red-600 text-red-400"
              }`}
            />
            {validationError?.regular_price && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.regular_price.message}</p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Discount Price
            </label>

            <input
              {...register("discount_price")}
              type="text"
              placeholder="Enter discount price"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Quantity
            </label>

            <input
              {...register("qantity")}
              type="number"
              placeholder="Quantity"
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.qantity && "border-red-600 text-red-400"
              }`}
            />
            {validationError?.qantity && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.qantity.message}</p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Status
            </label>

            <input
              {...register("status")}
              placeholder="Quantity"
              type="checkbox"
              className={`border  py-2 px-3  rounded-md outline-none toggle toggle-success ${
                validationError?.status && "border-red-600  bg-red-400"
              }`}
            />
            {validationError?.status && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.status.message}</p>
            )}
          </div>

          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Category
            </label>

            <select
              {...register("category_info")}
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.qantity && "border-red-600 text-red-400"
              }`}
            >
              <option value="">Select category</option>
              {Categories?.data?.data.map((item: any) => {
                return (
                  <option key={item._id} value={JSON.stringify({ _id: item._id, name: item.name })}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            {validationError?.category_info && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">{validationError.category_info.message}</p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Brand
            </label>

            <select name="" id="" className="border outline-none p-2 w-full">
              <option value="">Select Brand</option>
              {Brands?.data?.data.map((item: any) => {
                return (
                  <option key={item._id} value="">
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Product Image
            </label>

            <input
              {...register("product_image")}
              type="file"
              multiple
              name="product_image"
              className="border w-full py-2 px-3  rounded-md outline-none"
              onChange={handleImage}
            />

            {selectedImage && (
              <div className="my-3">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="thumbnail"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Gallery Image
            </label>

            <div>
              <input
                {...register("gallery_images")}
                type="file"
                multiple
                className="border w-full py-2 px-3  rounded-md outline-none"
                onChange={handleGalleyImage}
              />
              <div className="flex gap-2 my-3">
                {selectedGalleryImage &&
                  selectedGalleryImage.map((image) => {
                    return (
                      <div key={image} className="relative">
                        <Image src={image} width={100} height={100} alt="upload" />
                        <button
                          className="absolute top-0 right-0 bg-red-400 text-white px-1"
                          onClick={() => deleteHandler(image)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
