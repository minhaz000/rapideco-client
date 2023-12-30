"use client";
import { useRootContext } from "@/context/root.context";
import Link from "next/link";
import React from "react";
const SectionHeading = ({ sectionTitle, categoryId }: any) => {
  const { settingsData }: any = useRootContext();

  return (
    <div className="flex justify-between items-center border-b-2 pb-2 relative">
      <h2 className="text-[16px] lg:text-[20px] text-[#39404a] font-semibold capitalize">
        {sectionTitle}
      </h2>
      <div
        className="border px-4 py-[6px] rounded font-medium text-white duration-300 flex gap-2 items-center text-sm"
        style={{ background: `${settingsData?.header?.themeColor}` }}
      >
        <Link href={categoryId ? `/shop?cate=${categoryId}` : "/shop"}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default SectionHeading;
