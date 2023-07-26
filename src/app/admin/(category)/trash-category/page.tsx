"use client";
import React from "react";
import Image from "next/image";
import Img1 from "../../../../assets/img.png";
import { FaRegClock, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Trash = () => {
  const handleDeleteProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">All Trash Categories</h2>
      </div>
      <div className="shadow-[0_0_10px_5px_#d7d7d7bf] mt-6">
        <div className="flex justify-between items-center border-b pb-3 px-4 pt-4 mb-4">
          <div>
            <h2 className="text-xl">Trash Categories</h2>
          </div>
          <div className="flex gap-4">
            <div>
              <input
                type="text"
                placeholder="Type name & Enter"
                className="border outline-none text-sm py-2 px-3 w-40"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 p-4">
          <table className="table  w-[1130px] lg:w-full border">
            <thead>
              <tr className="border text-xs font-normal ">
                <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                <th className="py-3 text-slate-500 text-start">Name</th>
                <th className="py-3 text-slate-500 text-start">
                  Parent Category
                </th>
                <th className="py-3 text-slate-500 text-start">Order Level</th>
                <th className="py-3 text-slate-500 text-start">Level</th>
                <th className="py-3 text-slate-500 text-start">Icon</th>
                <th className="py-3 text-slate-500 text-start">Cover Image</th>
                <th className="py-3 text-slate-500 text-start">Featured</th>
                <th className="py-3 text-slate-500 text-start">Action</th>
              </tr>
            </thead>
            <tbody className="border pt-2">
              <tr className="text-xs font-normal text-start border-b">
                <td className="py-5 ps-4">1</td>
                <td>Women Clothing & Fashion</td>
                <td>--</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <Image src={Img1} width={50} height={50} alt=""></Image>
                </td>
                <td>
                  <Image src={Img1} width={50} height={50} alt=""></Image>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked
                  />
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <span
                      title="Restore"
                      className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                    >
                      <FaRegClock />
                    </span>

                    <span
                      onClick={handleDeleteProduct}
                      title="Delete"
                      className="bg-red-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trash;