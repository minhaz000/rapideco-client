"use client";
import React from "react";
import items from "../../../public/menulinks.json";
import SidebarItem from "./SidebarItem";
import "remixicon/fonts/remixicon.css";
const Sidebar = () => {
  return (
    <aside className="text-slate-100">
      <h2 className="text-slate-200 text-xl border-b border-slate-500 pb-3">
        Rapideco
      </h2>
      <div className="pt-6">
        <p className="text-slate-200 text-[14px] bg-slate-700 py-1 px-1 rounded">
          Pages
        </p>
        <nav className="mt-6">
          <ul className="capitalize flex flex-col gap-2">
            {items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
