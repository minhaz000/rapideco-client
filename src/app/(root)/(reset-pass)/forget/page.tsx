"use client";
import React from "react";
import axios from "@/hooks/hook.axios";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import FormValues from "./forget";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
function ForgetPage() {
  const { register, handleSubmit } = useForm<FormValues>();
  const HandleForget: SubmitHandler<FormValues> = (data) => {
    axios
      .post("/auth/v0/forget-password", data)
      .then((res) => {
        toast.success(res.data?.data);
      })
      .catch((error: any) =>
        toast.error(error.message ? error.message : error?.data.message)
      );
  };
  return (
    <section className="max-w-screen-sm mx-auto lg:px-10 mt-6 border rounded py-6 px-10">
      <form onSubmit={handleSubmit(HandleForget)}>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 outline-none"
        />
        <button className="bg-green-500 px-20 py-2 rounded text-white mt-5">
          Send
        </button>
      </form>
    </section>
  );
}

export default ForgetPage;
