import { Metadata } from "next";
import AttributeAdd from "./AttributeAdd";
import AttributesCom from "./AttributesCom";
export const metadata: Metadata = {
  title: "Attributes",
};
const Attributes = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold">All Attributes</h2>
      <div className="flex lg:flex-row flex-col-reverse gap-6 mt-6">
        <div className="lg:basis-7/12 shadow-[0_0_10px_5px_#d7d7d7bf]">
          <div className="flex justify-between items-center border-b px-6 py-4">
            <h2>Attributes</h2>
          </div>
          <div className="overflow-x-auto mt-3 p-4">
            <table className="table  w-[500px] md:w-full border">
              <thead>
                <tr className="border text-xs font-normal ">
                  <th className="py-3 text-slate-500 ps-4 text-start">#</th>
                  <th className="py-3 text-slate-500 text-start">Name</th>
                  <th className="py-3 text-slate-500 text-start">Values</th>
                  <th className="py-3 text-slate-500 text-start">Action</th>
                </tr>
              </thead>
              <AttributesCom />
            </table>
          </div>
        </div>
        {/* Here attribute added form from Attribute component */}
        <AttributeAdd />
      </div>
    </section>
  );
};

export default Attributes;
