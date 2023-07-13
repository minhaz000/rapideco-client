"use client";
import Link from "next/link";
import React from "react";
import Dashboard from "../../assets/icons/dashboard.png";
import Product from "../../assets/icons/product.png";
import Orders from "../../assets/icons/order.png";
import Image from "next/image";
import items from "../../../public/menulinks.json";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <div className="text-slate-100">
      <h2 className="text-white text-2xl">Rapideco</h2>
      <div className="pt-6">
        <p className="text-slate-200">Pages</p>
        <nav className="mt-6">
          <ul className="capitalize flex flex-col gap-2">
            {items.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
