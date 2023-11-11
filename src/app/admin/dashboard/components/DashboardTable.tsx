import React from "react";

const DashboardTable = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-2xl mb-4">Recent Order</h2>
      <table className="table  w-[1130px] lg:w-full border">
        <thead>
          <tr className="border text-sm font-normal ">
            <th className="py-3 text-slate-500 ps-4 text-start">INVOICE NO</th>
            <th className="py-3 text-slate-500 text-start">ORDER TIME</th>
            <th className="py-3 text-slate-500 text-start">CUSTOMER NAME</th>
            <th className="py-3 text-slate-500 text-start">METHOD</th>
            <th className="py-3 text-slate-500 text-start">AMOUNT</th>
            <th className="py-3 text-slate-500 text-start">STATUS</th>
            <th className="py-3 text-slate-500 text-start">ACTION</th>
          </tr>
        </thead>
        <tbody className="border pt-2">
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
          <tr className="text-sm font-normal text-start">
            <td className="py-4 ps-4">10185</td>
            <td>Jul 5, 2023 12:45 PM</td>
            <td>test INIJNMIO</td>
            <td>Cash</td>
            <td>$159.00</td>
            <td>
              <span className="bg-amber-500 bg-opacity-50 text-amber-700 text-sm p-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <select name="" id="" className="border outline-none p-2">
                <option value="">Pending</option>
                <option value="">Delivered</option>
                <option value="">Cancel</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
