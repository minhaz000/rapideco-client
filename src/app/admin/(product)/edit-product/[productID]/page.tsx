"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutationData, useQueryData } from "@/hooks/hook.query";
import { toast } from "react-toastify";
import { useAdminContext } from "@/context/admin.context";
import FormValues from "@/interface/product";
import Select from "react-select";
import Uploder from "@/hooks/hook.upload";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "../../add-product/Tiptap";
import Loading from "@/components/common/Loading";
const EditProduct = ({ params }: { params: { productID: string[] } }) => {
  const { Categories, Brands, Atrribute }: any = useAdminContext();
  const [selectedImage, setSelectedImage] = useState();
  const [oldGalleryImage, setOldGalleryImage] = useState([]);
  const [oldDesImage, setOldDesImage] = useState([]);
  const [manageAtt, setManageAttr]: any = useState([]);
  const [selectedDesImage, setSelectedDesImage] = useState([]);
  const [selectedGalleryImageFile, setSelectedGalleryImageFile] = useState([]);
  const {
    data: oldProduct,
    refetch,
    isLoading,
  } = useQueryData(["get old product"], `/api/v0/product/${params.productID}`);
  const updateProduct = useMutationData(
    ["update product "],
    "put",
    `/api/v0/product/${params.productID}`
  );

  const { register, handleSubmit, watch, reset, setValue, getValues } =
    useForm<FormValues>();
  // EDIT PRODUCT
  const HandleEditProduct: SubmitHandler<FormValues> = async (data) => {
    const gallery_images = await Uploder(selectedGalleryImageFile, "arry");
    // gallery_images && (data.gallery_images = [...data.gallery_images, ...gallery_images]);
    data.gallery_images = gallery_images
      ? [...oldGalleryImage, ...gallery_images]
      : [...oldGalleryImage];
    console.log(selectedDesImage.length);
    const description_img = await Uploder(selectedDesImage, "arry");
    data.description_img = description_img
      ? [...oldDesImage, ...description_img]
      : [...oldDesImage];
    // selectedDesImage.length > 0 ? [...(await Uploder(selectedDesImage))] : await Uploder(selectedDesImage);
    console.log(data.description_img);
    data.product_image?.length > 0 &&
      (data.product_image = await Uploder(data.product_image));
    data.status ? (data.status = "active") : (data.status = "deactive");
    data.category_info =
      typeof data.category_info === "string"
        ? JSON.parse(data.category_info)
        : data.category_info;
    data.brand_info =
      typeof data.brand_info === "string"
        ? JSON.parse(data.brand_info)
        : data.brand_info;
    updateProduct.mutate(data as any, {
      onSuccess: () => {
        toast.success("product updated");
        refetch().then((res: any) => reset(res.data));
        setSelectedGalleryImageFile([]);
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
    });
  };

  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
    setValue("product_image", e.target.files);
  };
  const handleGalleyImage = (event: any) => {
    const selectedFiles: any = [
      ...event.target.files,
      ...selectedGalleryImageFile,
    ];
    setSelectedGalleryImageFile(selectedFiles);
  };
  const handleDesImage = (event: any) => {
    const selectedFiles: any = [...event.target.files, ...selectedDesImage];
    setSelectedDesImage(selectedFiles);
    event.target.value = "";
  };

  function deleteHandler(image: any) {
    setOldGalleryImage(oldGalleryImage.filter((e) => e !== image));
    setOldDesImage(oldDesImage.filter((e) => e !== image));
    setSelectedGalleryImageFile(
      selectedGalleryImageFile.filter((e) => e !== image)
    );
    setSelectedDesImage(selectedDesImage.filter((e) => e !== image));
  }
  function handleOnChange(e: any) {
    setValue(e.target.name, e.target.value);
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content: ` `,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setValue("description", html);
    },
  });
  useEffect(() => {
    setOldGalleryImage(oldProduct?.data?.gallery_images);
    setOldDesImage(oldProduct?.data?.description_img);
    reset(oldProduct?.data);
    editor?.commands?.setContent(oldProduct?.data?.description);
    setManageAttr(oldProduct?.data.variants);
  }, [oldProduct]);
  const validationError: any = updateProduct.error?.data?.errors;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pb-4">
      <h2 className="text-2xl">Edit Product</h2>
      <div className="mt-6">
        <form onSubmit={handleSubmit(HandleEditProduct)}>
          <div className="md:grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block">
                Product Title
                <span className="text-red-500 font-semibold">*</span>
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
                <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                  {validationError.title.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-2 block">
                Product Code{" "}
                <span className="text-red-500 font-semibold">*</span>
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
                <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                  {validationError.code.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-3">
            <div className="mt-3">
              <label className="mb-2 block">
                Regular Price{" "}
                <span className="text-red-500 font-semibold">*</span>
              </label>

              <input
                {...register("regular_price")}
                type="number"
                placeholder="Enter regular price"
                className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                  validationError?.regular_price &&
                  "border-red-600 text-red-400"
                }`}
              />
              {validationError?.regular_price && (
                <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                  {validationError.regular_price.message}
                </p>
              )}
            </div>
            <div className="mt-3">
              <label className="mb-2 block">Discount Price</label>

              <input
                {...register("discount_price")}
                type="text"
                placeholder="Enter discount price"
                className="border w-full py-2 px-3  rounded-md outline-none"
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="mb-2 block">Quantity</label>

            <input
              {...register("quantity")}
              type="number"
              placeholder="Quantity"
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.quantity && "border-red-600 text-red-400"
              }`}
            />
            {validationError?.quantity && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                {validationError.quantity.message}
              </p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="block mb-2">
              Product Description
            </label>
            <div className="textEditor">
              <MenuBar editor={editor} />
              <EditorContent editor={editor} />
            </div>
          </div>

          <div className="mt-3">
            <label className="mb-2 block">
              Category <span className="text-red-500 font-semibold">*</span>
            </label>

            <select
              name="category_info"
              onChange={handleOnChange}
              className={`w-full border py-2 px-3 rounded-md  outline-none mt-2 ${
                validationError?.category_info && "border-red-600 text-red-400"
              }`}
            >
              <option value={oldProduct?.data?.category_info?.name}>
                {oldProduct?.data?.category_info?.name}{" "}
              </option>
              {Categories?.data?.data.map((item: any, i: number) => {
                return (
                  <option
                    key={i}
                    value={JSON.stringify({ _id: item._id, name: item.name })}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>

            {validationError?.category_info && (
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                {validationError.category_info.message}
              </p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Brand
            </label>

            <select
              name="brand_info"
              onChange={handleOnChange}
              className="border outline-none p-2 w-full"
            >
              <option value={oldProduct?.data?.brand_info?.name}>
                {oldProduct?.data?.brand_info?.name}
              </option>
              {Brands?.data?.data.map((item: any, i: number) => {
                return (
                  <option
                    key={i}
                    value={JSON.stringify({ _id: item._id, name: item.name })}
                  >
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
              defaultValue={oldProduct?.data?.variants || []}
              onChange={(vaule: any) => {
                setManageAttr(vaule);
                setValue("variants", vaule);
              }}
              options={Atrribute?.data?.data || []}
            />
          </div>
          {manageAtt?.map((item: any, i: number) => {
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
                  defaultValue={item?.attribute_options}
                  onChange={(value) => {
                    manageAtt[i].attribute_options = value;
                    setValue("variants", manageAtt);
                  }}
                  options={item?.attribute_options}
                />
              </div>
            );
          })}

          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Product Image (200 * 200){" "}
              <span className="text-red-500 font-semibold">*</span>
            </label>

            <input
              type="file"
              name="product_image"
              className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
              onChange={handleImage}
            />

            <div className="my-3">
              <Image
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : oldProduct?.data?.product_image?.img_url
                }
                alt="thumbnail"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Gallery Image(582 * 582)
            </label>

            <div>
              <input
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
                          src={image.img_url}
                          width={100}
                          height={100}
                          alt="upload"
                        />
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
                      <Image
                        src={URL.createObjectURL(image)}
                        width={100}
                        height={100}
                        alt="upload"
                      />
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
          <div className="mt-3">
            <label htmlFor="name" className="block">
              Description Image
            </label>
            <div>
              <input
                {...register("description_img")}
                type="file"
                multiple
                className="w-full file-input file-input-bordered file-input-xs  outline-none mt-2 "
                onChange={handleDesImage}
              />
              <div className="flex gap-2 my-3">
                {oldDesImage &&
                  oldDesImage.map((image: any, i: number) => {
                    return (
                      <div key={i} className="relative">
                        <Image
                          src={image.img_url}
                          width={100}
                          height={100}
                          alt="upload"
                        />
                        <button
                          className="absolute top-0 right-0 bg-red-400 text-white px-1"
                          onClick={() => deleteHandler(image)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                {selectedDesImage &&
                  selectedDesImage.map((image: any, i: number) => {
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
              <p className="text-red-600 text-[14px]  mb-[5px] text-right">
                {validationError.status.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            value="Update Product"
            className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
