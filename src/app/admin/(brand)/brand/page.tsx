"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "@/interface/brand";
import Uploder from "@/hooks/hook.upload";
import { useAdminContext } from "@/context/admin.context";
import { useMutationData } from "@/hooks/hook.query";
import axios from "@/hooks/hook.axios";
const Brand = () => {
  const { Brands }: any = useAdminContext("/api/v0/brands");
  const newBrand = useMutationData(["add new brand"], "post", "api/v0/brand");
  const { register, reset, handleSubmit } = useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleAddBrand: SubmitHandler<FormValues> = async (data) => {
    data.imgURL = await Uploder(data.imgURL);
    newBrand.mutate(data as any, {
      onSuccess: () => {
        toast.success("brand added");
        Brands.refetch();
        reset();
      },
      onError: (error: any) =>
        toast.error(error.message ? error.message : error?.data.message),
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
          .delete(`/api/v0/brand/${deleteId}?permanent=true`)
          .then(() => {
            toast.success("Brand deleted");
            Brands.refetch();
          })
          .catch((error: any) =>
            toast.error(error.message ? error.message : error?.data.message)
          );
      }
    });
  };
  const handleFeatured = (e: any, ID: string) => {
    e.preventDefault();
    const data = e.target.checked ? { featured: true } : { featured: false };
    axios
      .put(`/api/v0/brand/${ID}`, data)
      .then(() => {
        Brands.refetch();
        toast.success(
          !e.target.checked ? "add to featured brand" : "removed from featured "
        );
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  return (
    <div>
      <h2 className="text-xl">All Brands</h2>
      <div className="flex lg:flex-row flex-col-reverse gap-6 mt-6">
        <div className="basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Brands</h2>
            <input
              type="text"
              placeholder="Type name & enter"
              className="border outline-none py-2 px-2"
            />
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[700px] lg:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">Name</th>
                  <th className="py-3 text-slate-500 text-start">Logo</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <tbody className="border pt-2">
                {Brands.data?.data?.map((item: any, i: number) => {
                  return (
                    <>
                      <tr className="text-xs font-normal text-start border-b">
                        <td className="py-5 ps-4">{i + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <Image
                            src={item.imgURL?.img_url}
                            width={50}
                            height={50}
                            alt={item.name}
                          ></Image>
                        </td>

                        <td>
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={(e) => handleFeatured(e, item._id)}
                              type="checkbox"
                              className="toggle toggle-success"
                              defaultChecked={item.featured ? true : false}
                            />
                            <span
                              title="Edit"
                              className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                            >
                              <Link href={`/admin/edit-brand/${item._id}`}>
                                <FaRegEdit />
                              </Link>
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
          <h2 className="border px-6 py-4 text-xl font-semibold">
            Add New Brand
          </h2>
          <div className="px-6 pt-4">
            <form onSubmit={handleSubmit(HandleAddBrand)}>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Brand Name
                </label>

                <input
                  {...register("name")}
                  type="text"
                  placeholder="Brand name"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="name" className="mb-2 block">
                  Logo
                </label>

                <input
                  {...register("imgURL")}
                  type="file"
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Meta Title</label>
                <br />
                <input
                  {...register("meta_title")}
                  type="text"
                  placeholder="Meta Title"
                  className="w-full border py-2 px-3 outline-none mt-2"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="">Meta description</label>
                <br />
                <textarea
                  {...register("meta_description")}
                  placeholder="Meta description"
                  className="w-full border py-2 px-3 outline-none mt-2 h-28"
                ></textarea>
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

export default Brand;
