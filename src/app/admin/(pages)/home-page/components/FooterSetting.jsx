"use client";

import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const FooterSetting = () => {
  const [pageItem, setPageItem] = useState(1);
  const handlePageItem = (e) => {
    e.preventDefault();
    setPageItem((prev) => prev + 1);
  };
  return (
    <section className="border mt-10 py-6 px-4 lg:px-10">
      <h2 className="text-sm mb-2">Footer Widget</h2>
      <div className="lg:flex gap-5 mt-5">
        <div className="lg:basis-1/2 border p-3">
          <h3 className="text-sm border-b pb-2 mb-3">About Widget</h3>
          <form>
            <>
              <label className="text-[12px] block mb-1">Footer Logo</label>
              <input type="file" className="border py-1 px-2 w-full" />
            </>
            <div className="mt-4">
              <label className="text-[12px] block mb-1">
                About description
              </label>
              <textarea className="border py-1 px-2 w-full h-24 outline-none"></textarea>
            </div>
            <div className="mt-4">
              <label className="text-[12px] block mb-[6px]">Social Links</label>
              <div className="flex items-center">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaFacebookF />
                </span>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="www.facebook.com"
                />
              </div>
              <div className="flex items-center mt-3">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaLinkedinIn />
                </span>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="www.linkedin.com"
                />
              </div>
              <div className="flex items-center mt-3">
                <span className="border h-[34px] px-1 flex items-center justify-center">
                  <FaWhatsapp />
                </span>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="www.whatsapp.com"
                />
              </div>
            </div>
            <button
              className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
        <div className="lg:basis-1/2 ">
          <div className="border p-3">
            <h3 className="text-sm border-b pb-2 mb-3">Contact Info Widget</h3>
            <form>
              <>
                <label className="text-[12px] block mb-1">
                  Contact address
                </label>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="Demo"
                />
              </>
              <div className="mt-3">
                <label className="text-[12px] block mb-1">Contact phone</label>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="14520658"
                />
              </div>
              <div className="mt-3">
                <label className="text-[12px] block mb-1">Contact email</label>
                <input
                  type="text"
                  className="border py-1 px-2 w-full outline-none"
                  placeholder="14520658"
                />
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border pt-6 capitalize px-4 pb-4">
        <h2 className="text-sm mb-2">Link Widget</h2>
        <form>
          <label className="text-[12px] block mb-1">Title </label>
          <input
            type="text"
            defaultValue="Quick Links"
            className="w-full border rounded outline-none py-1 px-2 mb-4"
          />
          <label className="text-[12px] block mb-1">Links</label>
          {Array.from({ length: pageItem }, (_, i) => (
            <div
              className="flex justify-between gap-3 items-center mb-3"
              key={i}
            >
              <input
                type="text"
                className="lg:basis-3/12 border rounded outline-none text-[13px] md:text-[15px] px-2 py-[6px] md:py-2 md:px-2"
                placeholder="Support Policy Page"
              />
              <input
                type="text"
                className="lg:basis-8/12 border rounded outline-none py-2 px-2 text-[13px] md:text-[15px] px-2 py-[6px] md:py-2 md:px-2"
                placeholder="https://demo.rapideco.com/ecommerce/sellerpolicy"
              />
              <button
                className=" bg-red-500 bg-opacity-20 rounded-full w-8 h-8 text-red-600"
                onClick={() => setPageItem((prev) => prev - 1)}
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
        </form>
      </div>

      <div className="mt-8 border pt-6 capitalize px-4 pb-4">
        <h2 className="text-sm mb-3 border-b pb-2">Copyright Widget</h2>
        <form>
          <label className="text-[12px] block mb-1">Copyright Text</label>

          <textarea
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
    </section>
  );
};

export default FooterSetting;
