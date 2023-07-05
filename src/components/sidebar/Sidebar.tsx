import Link from "next/link";
import React from "react";
import Dashboard from "../../assets/icons/dashboard.png";
import Product from "../../assets/icons/product.png";
import Orders from "../../assets/icons/order.png";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="text-slate-100">
      <h2 className="text-white text-2xl">Rapideco</h2>
      <div className="pt-6">
        <p className="text-slate-200">Pages</p>
        <nav className="mt-6">
          <ul className="capitalize flex flex-col gap-6">
            <li>
              <Link href="#" className="flex items-center gap-2">
                <Image src={Dashboard} alt="" width={26} height={26} />{" "}
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <Image src={Product} alt="" width={26} height={26} /> Products
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <Image src={Orders} alt="" width={26} height={26} /> Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
