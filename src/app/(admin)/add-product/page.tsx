"use client";
import JoditEditor from "jodit-react";
import React, { useState, useRef } from "react";

const AddProduct = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="pb-4">
      <h2 className="text-2xl">Add Product</h2>
      <div className="mt-6">
        <form>
          <div>
            <label htmlFor="name" className="mb-2 block">
              Product Name
            </label>

            <input
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
              Product Image
            </label>

            <input
              type="file"
              className="border w-full py-2 px-3  rounded-md outline-none"
            />
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
