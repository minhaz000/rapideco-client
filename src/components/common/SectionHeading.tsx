import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const SectionHeading = ({ sectionTitle, seeMoreUrl }: any) => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-2 relative">
      <span className="absolute top-[42px] left-0 h-[2px] w-2/12 bg-[#00C9B4]"></span>
      <h2 className="text-xl lg:text-2xl text-[#39404a] font-bold">
        {sectionTitle}
      </h2>
      <div className="border px-4 py-1 rounded font-semibold hover:bg-[#00C9B4] hover:text-white duration-300 flex gap-2 items-center">
        <Link href={seeMoreUrl || "/"}>See More</Link>
        <span>
          <BsArrowRightShort />
        </span>
      </div>
    </div>
  );
};

export default SectionHeading;
