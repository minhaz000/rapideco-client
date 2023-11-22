"use client";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
export default function SidebarItem({ item }: any) {
  const [open, setOpen] = useState(false);
  if (item.children) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div
          className="sidebar-title cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <span className="text-[18px] block">{item.icon}</span>
            <span className="text-[15px] opacity-95 inline-block">
              {item.title}
            </span>
          </div>
          {open ? <FaAngleDown /> : <FaAngleRight />}
        </div>
        <div className="sidebar-content">
          {item.children.map((child: any, index: any) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href={item.path || "#"}
        className="sidebar-item plain flex items-center gap-2 text-[17px]"
      >
        <span className="text-[18px] block">{item.icon}</span>
        <span className="text-[15px] opacity-95 inline-block">
          {item.title}
        </span>
      </Link>
    );
  }
}
