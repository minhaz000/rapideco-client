"use client";
import { useState } from "react";
const HeaderSetting = () => {
  const [pageItem, setPageItem] = useState(1);
  const handlePageItem = (e: any) => {
    e.preventDefault();
    setPageItem((prev) => prev + 1);
  };
  return (
    <form className="border mt-10 py-6 px-4 lg:px-10">
      <div className="flex gap-5">
        <div className="basis-1/2">
          <label htmlFor="logo" className="block mb-3 text-sm">
            Logo Upload
          </label>
          <input
            type="file"
            className="w-full py-1 px-1 rounded border"
            id="logo"
          />
        </div>
        <div className="basis-1/2">
          <label htmlFor="theme" className="block mb-3 text-sm">
            Header Color
          </label>
          <input
            type="color"
            className="w-full h-10 rounded border"
            id="theme"
          />
        </div>
      </div>
      <div className="mt-10 border-t pt-6 capitalize">
        <h2 className="text-sm mb-2">Header nav menu</h2>
        <form>
          {Array.from({ length: pageItem }, (_, i) => (
            <div
              className="flex justify-between gap-3 items-center mb-3"
              key={i}
            >
              <input
                type="text"
                className="basis-3/12 border rounded outline-none py-2 px-2"
                placeholder="Lavel"
              />
              <input
                type="text"
                className="basis-8/12 border rounded outline-none py-2 px-2"
                placeholder="Link with http:// Or https://"
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
    </form>
  );
};

export default HeaderSetting;
