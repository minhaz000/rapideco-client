import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 lg:px-20 mt-6 hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className=" w-1/2 hidden md:block">
            <img src="https://i.ibb.co/TLYbLkN/login.jpg" alt="" />
          </div>
          <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 pb-10">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold capitalize mb-6 border-b pb-4">
                Register
              </h2>
              <form>
                <div className="lg:flex gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                </div>
                <div className="lg:flex gap-3 mt-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="border w-full py-2 px-3 rounded outline-none mt-2"
                    />
                  </div>
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Upload Photo</span>
                  </label>
                  <input
                    type="file"
                    className="border w-full py-2 px-3 rounded outline-none mt-2"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="bg-green-600 text-white text-xl px-6 md:px-8 border border-green-600 py-2 rounded cursor-pointer font-semibold">
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center text-lg text-green-600">
                Already registered? <Link href="/login">Go to log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
