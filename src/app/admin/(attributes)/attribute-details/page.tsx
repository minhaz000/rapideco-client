import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
const AttributeDetail = () => {
  return (
    <div>
      <h2 className="text-xl">All Detail</h2>
      <div className="flex lg:flex-row flex-col-reverse gap-6 mt-6">
        <div className="basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Size</h2>
            <input type="text" placeholder="Type name & enter" className="border outline-none py-2 px-2" />
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[700px] lg:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">Value</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <tbody className="border pt-2">
                <tr className="text-xs font-normal text-start border-b">
                  <td className="py-5 ps-4">1</td>
                  <td>
                    <span className="bg-gray-400 py-1 rounded-md px-2">L</span>
                  </td>

                  <td>
                    <div className="flex gap-2 items-center">
                      <span
                        title="Edit"
                        className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                      >
                        <FaRegEdit />
                      </span>
                      <span
                        title="Delete"
                        className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                      >
                        <FaRegTrashAlt />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="text-xs font-normal text-start border-b">
                  <td className="py-5 ps-4">2</td>
                  <td>
                    <span className="bg-gray-400 py-1 rounded-md px-2">X</span>
                  </td>

                  <td>
                    <div className="flex gap-2 items-center">
                      <span
                        title="Edit"
                        className="bg-yellow-500 bg-opacity-50 text-white text-xs p-[5px] rounded-full cursor-pointer hover:bg-opacity-100"
                      >
                        <FaRegEdit />
                      </span>
                      <span
                        title="Delete"
                        className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 text-white text-xs p-[5px] rounded-full cursor-pointer"
                      >
                        <FaRegTrashAlt />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-5/12 shadow-[0_0_10px_5px_#d7d7d7bf] pb-6">
          <h2 className="border px-6 py-4 text-xl font-semibold">Add New Attribute Value</h2>
          <div className="px-6 pt-4">
            <form>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Attributes Name
                </label>

                <input
                  type="text"
                  placeholder="Size"
                  disabled
                  className="border w-full py-2 px-3  rounded-md outline-none"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-2 block">
                  Attributes Value
                </label>

                <input type="text" placeholder="Name" className="border w-full py-2 px-3  rounded-md outline-none" />
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

export default AttributeDetail;
