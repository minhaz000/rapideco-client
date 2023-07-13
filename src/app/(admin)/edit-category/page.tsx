import React from "react";

const page = () => {
  return (
    <div className="shadow-lg p-6 w-2/3 mx-auto border rounded">
      <h2 className="border-b pb-2 text-xl">Update Category information</h2>
      <form>
        <div className="mt-4">
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            defaultValue={"woman shoes"}
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Parent Category</label>
          <br />
          <select
            name=""
            id=""
            className="w-full border py-2 px-3 outline-none mt-2"
          >
            <option value="">No parent</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="">Icon (32x32)</label>
          <br />
          <input
            type="file"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Cover image (250x250)</label>
          <br />
          <input
            type="file"
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta Title</label>
          <br />
          <input
            type="text"
            defaultValue={"Women Clothing & Fashion"}
            className="w-full border py-2 px-3 outline-none mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Meta description</label>
          <br />
          <textarea
            defaultValue={
              "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,"
            }
            className="w-full border py-2 px-3 outline-none mt-2 h-28"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Save"
          className="bg-sky-800 px-8 mt-3 py-2 rounded text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default page;
