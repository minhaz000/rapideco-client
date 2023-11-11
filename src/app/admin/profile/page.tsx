"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const handleUpdate = (data: any) => {
    console.log(data);
    axios.post("auth/v0/login", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <section className="border shadow md:w-3/5 mx-auto rounded mt-4 px-4 py-2">
      <h2 className="text-xl mb-4">Update your information</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter name"
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
          {...register("currentPassword")}
          placeholder="Current password"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <input
          type="password"
          {...register("newPassword")}
          placeholder="New password"
          className="outline-none py-[6px] px-3 rounded w-full mb-4 border"
        />
        <button
          type="submit"
          className="px-5 py-2 rounded mt-3 bg-orange-500 text-white"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default Profile;
