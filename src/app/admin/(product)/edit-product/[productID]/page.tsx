"use client";
import JoditEditor from "jodit-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Img1 from "@/assets/img.png";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
import FormValues from "@/interface/product";
import Select from "react-select";
const EditProduct = ({ params }: { params: { productID: string[] } }) => {
  const { Categories, Brands, Atrribute, Products }: any = useAdminContext();
  const [selectedImage, setSelectedImage] = useState();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState([]);
  const [selectedGalleryImageFile, setSelectedGalleryImageFile] = useState([]);
  const { data: oldProduct, refetch } = useQueryData(["get old product"], `/api/v0/product/${params.productID}`);
  const updateProduct = useMutationData(["update product "], "put", `/api/v0/product/${params.productID}`);
  const { register, handleSubmit, watch, reset, setValue, getValues } = useForm<FormValues>();
  // EDIT PRODUCT
  const HandleEditProduct: SubmitHandler<FormValues> = async (data) => {
    // data.gallery_images = await Uploder(data.gallery_images);
    // data.product_image = await Uploder(data.product_image);
    data.status ? (data.status = "active") : (data.status = "deactive");
    // data.category_info = data.category_info && JSON.parse(data.category_info);
    // data.brand_info = data.brand_info && JSON.parse(data.brand_info);
    // console.log("product ", data.product_image);
    // console.log("grally ", data.gallery_images);
    // console.log("grally ", selectedGalleryImage);
    console.log(data);
    // console.log("file ", selectedGalleryImageFile);
    // console.log(data.product_image);.

    // updateProduct.mutate(data as any, {
    //   onSuccess: () => {
    //     toast.success("product updated");
    //     refetch().then((res: any) => reset(res.data));
    //   },
    //   onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    // });
  };

  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleGalleyImage = (event: any) => {
    const selectedFiles = [...event.target.files];
    setSelectedGalleryImageFile(selectedFiles);

    // setSelectedGalleryImageFile(selectedFiles);
    // const selectedFilesArray = Array.from(selectedFiles);
    // const imagesArray = selectedFilesArray.map((file) => {
    //   return URL.createObjectURL(file as any);
    // });
    // setSelectedGalleryImage((previousImages: any) => previousImages.concat(imagesArray as any));
    // event.target.value = "";
    // console.log(event.target);
  };
  console.log(selectedGalleryImage);
  function deleteHandler(image: any) {
    console.log(image);
    setSelectedGalleryImage(selectedGalleryImage.filter((e) => e !== image));

    URL.revokeObjectURL(image);
  }

  useEffect(() => {
    setSelectedGalleryImage(oldProduct?.data?.gallery_images);
    reset(oldProduct?.data);
  }, [oldProduct]);
  const validationError: any = updateProduct.error?.data?.errors;
  return (
    <div className="pb-4">
      <h2 className="text-2xl">Edit Product</h2>
      <div className="mt-6">
        <form onSubmit={handleSubmit(HandleEditProduct)}>
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
              {...register("quantity")}
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
              <option value=""> {oldProduct?.data.category_info?.name} </option>
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
              Atrribute
            </label>

            <Select
              isMulti={true}
              value={getValues("variants")}
              onChange={(value) => setValue("variants", value)}
              options={Atrribute?.data?.data}
            />
          </div>
          {watch("variants")?.map((item: any, i: number) => {
            return (
              <div key={i} className="mt-3 grid grid-cols-12">
                <label
                  htmlFor="name"
                  className="mb-2  text-center bg-slate-300 rounded-md h-[38px] flex items-center justify-center mr-4 col-span-4"
                >
                  {item.label}
                </label>

                <Select
                  className="col-span-8"
                  isMulti={true}
                  defaultInputValue={item.attribute_options}
                  onChange={(value) => setValue("variants.attribute_options", value)}
                  options={item.attribute_options}
                />
              </div>
            );
          })}

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

            <div className="my-3">
              <Image
                src={selectedImage ? URL.createObjectURL(selectedImage) : oldProduct?.data?.product_image?.img_url}
                alt="thumbnail"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
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
                  selectedGalleryImage.map((image: any) => {
                    return (
                      <div key={image} className="relative">
                        <Image src={image.img_url} width={100} height={100} alt="upload" />
                        <button
                          className="absolute top-0 right-0 bg-red-400 text-white px-1"
                          onClick={() => deleteHandler(image)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                {selectedGalleryImageFile.map((image: any, i) => {
                  return (
                    <div key={i} className="relative">
                      <Image src={URL.createObjectURL(image)} width={100} height={100} alt="upload" />
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

export default EditProduct;