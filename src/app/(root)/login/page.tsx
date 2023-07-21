"use client";
import Link from "next/link";
import { useForm as useform, SubmitHandler } from "react-hook-form";
import axios from "../../../hooks/hook.axios";
import FormValues from "./login";
const Login = () => {
  const { register, handleSubmit } = useform<FormValues>();
  // =============== FUNCTION FOR THE PRODUCT POST REQUEST
  const HandleLogin: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-6 hero min-h-screen bg-base-200">
        <div className="md:flex flex-row gap-8">
          <div className="w-full md:w-1/2 hidden  md:block">
            <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-full md:w-1/2">
            <div className="card-body">
              <h1 className="text-4xl font-bold text-center mb-6 border-b pb-4">
                Login now!
              </h1>
              <form onSubmit={handleSubmit(HandleLogin)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("username")}
                    // type="email"
                    placeholder="Email"
                    className="border w-full py-2 px-3 rounded outline-none mt-2"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-green-600 text-white text-xl px-6 md:px-8 border border-green-600 py-2 rounded cursor-pointer font-semibold">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center text-lg text-green-600">
                Don not have a account? <Link href="/signup">Register now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
