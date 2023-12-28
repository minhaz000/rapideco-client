import SidebarItem from "./SidebarItem";
import items from "./MenuItem";
import Link from "next/link";
import { useAdminContext } from "@/context/admin.context";
import Image from "next/image";
const Sidebar = () => {
  const { settingsData }: any = useAdminContext();
  return (
    <aside className="text-slate-100">
      <Link href={"/"}>
        {settingsData?.header?.logo?.img_url && (
          <Image
            src={settingsData?.header?.logo?.img_url}
            width={130}
            height={50}
            alt="Logo Image"
            className="object-cover w-[90%] sm:w-[130px]"
          />
        )}
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
