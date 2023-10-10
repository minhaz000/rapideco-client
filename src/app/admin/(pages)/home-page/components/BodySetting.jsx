"use client";
import { useState } from "react";

const BodySetting = () => {
  const [pageItem, setPageItem] = useState(1);
  const handlePageItem = (e) => {
    e.preventDefault();
    setPageItem((prev) => prev + 1);
  };
  return (
    <section>
      <form className="border mt-10 py-6 px-4 lg:px-10">
        <div>
          <label htmlFor="logo" className="block mb-3 text-sm">
            Banner Slider
          </label>
          <input
            type="file"
            className="w-full py-1 px-1 rounded border"
            id="logo"
          />
          <button className="bg-blue-600 block text-white px-6 py-[6px] mt-4 rounded-md cursor-pointer">
            Update
          </button>
        </div>

        <div className="mt-6 capitalize">
          <form>
            {Array.from({ length: pageItem }, (_, i) => (
              <div
                className="flex justify-between gap-3 items-center mb-3"
                key={i}
              >
                <span className="w-10"> {i}</span>
                <input
                  type="text"
                  className="basis-11/12 border rounded outline-none py-2 px-2"
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
          </form>
        </div>
      </form>
    </section>
  );
};

export default BodySetting;
