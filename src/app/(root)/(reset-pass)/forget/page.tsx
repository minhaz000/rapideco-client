import React from "react";

function ForgetPage() {
  return (
    <section className="max-w-screen-sm mx-auto lg:px-20 mt-6 border rounded py-6 px-10">
      <form>
        <input
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
