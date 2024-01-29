"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../hooks/hook.axios";
import { useAdminContext } from "@/context/admin.context";
import { toast } from "react-toastify";
const Profile = () => {
  const { user, isSuccess }: any = useAdminContext();
  const { register, handleSubmit, reset } = useForm();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const handleUpdate = async (data: any) => {
    try {
      axios.put("auth/v0/manage", data).then((res) => {
        toast.success("profile updated");
      });
    } catch (error) {
      toast.error(error.message ? error.message : error?.data.message);
    }
  };
  useEffect(() => {
    reset(user?.data);
  }, [user]);
  return (
    <section className="border shadow md:w-3/5 mx-auto rounded mt-4 px-4 py-2">
      <h2 className="text-xl mb-4">Update your information</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input
          type="text"
          {...register("username")}
          placeholder="Enter User name"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Enter email"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <input
          type="password"
          {...register("current_password")}
          placeholder="Current password"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <input
          type="password"
          {...register("new_password")}
          placeholder="New password"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <button type="submit" className="px-5 py-2 rounded mt-3 bg-orange-500 text-white">
          Update
        </button>
      </form>
    </section>
  );
};

export default Profile;
