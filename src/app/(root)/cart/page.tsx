import React from "react";

const Cart = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-6">
      <h2 className="text-center text-3xl font-semibold">
        Your Cart (3 Items)
      </h2>
      <div className="overflow-x-auto mt-3 p-4">
        <table className="table  w-[1130px] lg:w-full border">
          <thead>
            <tr className="border text-xs font-normal ">
              <th className="py-3 text-slate-500 ps-4 text-start">Item</th>
              <th className="py-3 text-slate-500 text-start">Price</th>
              <th className="py-3 text-slate-500 text-start">Quantity</th>
              <th className="py-3 text-slate-500 text-start">Total</th>
            </tr>
          </thead>
          <tbody className="border pt-2">
            <tr className="text-xs font-normal text-start border-b">
              <td className="py-5 ps-4">20220912-10085522</td>
              <td>$99.000</td>
              <td>Paul K. Jensen</td>
              <td>$999.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
