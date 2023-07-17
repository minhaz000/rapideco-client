"use client";
import JoditEditor from "jodit-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../../../../hooks/hook.axios";
import FormValues from "./product";
const AddProduct = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState([]);
  const { register, handleSubmit } = useForm<FormValues>();
  const handleImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleGalleyImage = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file as any);
    });

    setSelectedGalleryImage((previousImages) =>
      previousImages.concat(imagesArray as any)
    );

    // FOR BUG IN CHROME
    event.target.value = "";
  };
  function deleteHandler(image: any) {
    setSelectedGalleryImage(selectedGalleryImage.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddProduct: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

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
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Short Description
            </label>

            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Full Description
            </label>

            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Regular Price
            </label>

            <input
              type="text"
              placeholder="Enter regular price"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Discount Price
            </label>

            <input
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
              type="number"
              placeholder="Quantity"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Category
            </label>

            <select name="" id="" className="border outline-none p-2 w-full">
              <option value="">Select category</option>
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Brand
            </label>

            <select name="" id="" className="border outline-none p-2 w-full">
              <option value="">Select Brand</option>
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Product Image
            </label>

            <input
              type="file"
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
                        <Image
                          src={image}
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
