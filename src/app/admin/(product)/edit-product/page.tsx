"use client";
import JoditEditor from "jodit-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Img1 from "../../../../assets/img.png";
const EditProduct = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked"
  );

  return (
    <div className="pb-4">
      <h2 className="text-2xl">Edit Product</h2>
      <div className="mt-6">
        <form>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Product Name
            </label>

            <input
              type="text"
              defaultValue={
                "Apple iPhone 14 Pro , 128GB, 512GB, Deep Purple- Unlocked"
              }
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
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              // onChange={newContent => {}}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Regular Price
            </label>

            <input
              type="text"
              defaultValue={"100"}
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Discount Price
            </label>

            <input
              type="text"
              defaultValue={"80"}
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="mb-2 block">
              Quantity
            </label>

            <input
              type="number"
              defaultValue={"2"}
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
              Product Image
            </label>

            <input
              type="file"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
            <div className="relative inline-block mt-2">
              <Image src={Img1} alt="" width={80} height={80} />
              <span className="absolute top-2 -right-2 bg-gray-300 text-amber-500 text-xs px-2 py-1 rounded-full cursor-pointer">
                X
              </span>
            </div>
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
              />
              <div className="flex gap-5">
                <div className="relative inline-block mt-2">
                  <Image src={Img1} alt="" width={80} height={80} />
                  <span className="absolute top-2 -right-2 bg-gray-300 text-amber-500 text-xs px-2 py-1 rounded-full cursor-pointer">
                    X
                  </span>
                </div>
                <div className="relative inline-block mt-2">
                  <Image src={Img1} alt="" width={80} height={80} />
                  <span className="absolute top-2 -right-2 bg-gray-300 text-amber-500 text-xs px-2 py-1 rounded-full cursor-pointer">
                    X
                  </span>
                </div>
                <div className="relative inline-block mt-2">
                  <Image src={Img1} alt="" width={80} height={80} />
                  <span className="absolute top-2 -right-2 bg-gray-300 text-amber-500 text-xs px-2 py-1 rounded-full cursor-pointer">
                    X
                  </span>
                </div>
              </div>
            </div>
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
