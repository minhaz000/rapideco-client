import SidebarItem from "./SidebarItem";
import items from "./MenuItem";
import Link from "next/link";
const Sidebar = () => {
  return (
    <aside className="text-slate-100">
      <Link href={"/"}>
        <h2 className="text-slate-200 text-2xl border-b border-slate-500 pb-3">
          Isoftex
        </h2>
      </Link>
      <div className="pt-6">
        <p className="text-slate-200 text-[14px] bg-slate-700 py-2 px-2 rounded">
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
