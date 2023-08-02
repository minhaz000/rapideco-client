"use client";
import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "../attributes";

import { useAdminContext } from "@/context/admin.context";
import { useMutationData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";

const Attributes = () => {
  const { Atrribute }: any = useAdminContext();
  const newBrand = useMutationData(["add new attribute"], "post", "api/v0/attribute");
  const { watch, register, reset, handleSubmit } = useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddAtrribute: SubmitHandler<FormValues> = async (data) => {
    newBrand.mutate(data, {
      onSuccess: () => {
        toast.success("atrribute added");
        Atrribute.refetch();
        reset();
      },
      onError: (error: any) => toast.error(error.message ? error.message : error?.data.message),
    });
  };
  const handleDelete = (deleteId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`/api/v0/attribute/${deleteId}?permanent=true`)
          .then(() => {
            toast.success("Brand deleted");
            Atrribute.refetch();
          })
          .catch((error: any) => toast.error(error.message ? error.message : error?.data.message));
      }
    });
  };
  return (
    <div>
      <h2 className="text-xl">All Attributes</h2>
      <div className="flex lg:flex-row flex-col-reverse gap-6 mt-6">
        <div className="basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Attributes</h2>
            <input type="text" placeholder="Type name & enter" className="border outline-none py-2 px-2" />
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[700px] lg:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">Name</th>
                  <th className="py-3 text-slate-500 text-start">Values</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <tbody className="border pt-2">
                {Atrribute?.data?.data.map((item: any, i: number) => {
                  return (
                    <>
                      <tr className="text-xs font-normal text-start border-b">
                        <td className="py-5 ps-4">{i + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <div className="flex gap-1 items-center">
                            <span className="bg-gray-400 py-1 rounded-md block px-2">L</span>
                            <span className="bg-gray-400 py-1 rounded-md block px-2">X</span>
                          </div>
                        </td>

                        <td>
                          <div className="flex gap-2 items-center">
                            <span
                              title="Attributes values"
                              className="bg-blue-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                            >
                              <Link href="/admin/attribute-detail">
                                <BsGear />
                              </Link>
                            </span>

                            <span
                              title="Edit"
                              className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                            >
                              <FaRegEdit />
                            </span>
                            <span
                              onClick={() => handleDelete(item._id)}
                              title="Delete"
                              className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                            >
                              <FaRegTrashAlt />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-5/12 shadow-[0_0_10px_5px_#d7d7d7bf] pb-6">
          <h2 className="border px-6 py-4 text-xl font-semibold">Add New Attributes</h2>
          <div className="px-6 pt-4">
            <form onSubmit={handleSubmit(HandleAddAtrribute)}>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Attributes Name
                </label>

                <input
                  {...register("name")}
                  type="text"
                  placeholder="Attribute name"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              <input
                type="submit"
                value="Save"
                className="bg-red-600 text-white px-6 py-2 mt-4 rounded-md cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
