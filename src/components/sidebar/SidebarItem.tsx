import Link from "next/link";
import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div
          className="sidebar-title cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="text-[13px]">
            {item.icon && <i className={item.icon}></i>} {item.title}
          </span>
          {open ? <FaAngleDown /> : <FaAngleRight />}
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link href={item.path || "#"} className="sidebar-item plain text-[13px]">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </Link>
    );
  }
}
