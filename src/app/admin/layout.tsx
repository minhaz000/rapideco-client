"use client";
import AdminContext, { useAdminContext } from "@/context/admin.context";
import SidebarMenuOnclick from "./DashboardHome/SidebarMenuOnclick";
import SidebarCloseMenu from "./DashboardHome/SidebarCloseMenu";
import ProfileMenuClick from "./DashboardHome/ProfileMenuClick";
import { useRouter } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";
import { useEffect, useState } from "react";
import axios from "@/hooks/hook.axios";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // const { data: user, isSuccess, isError } = useQueryData(["get user"], "/auth/v0/profile");
  const router = useRouter();
  const [user, SetUser] = useState(null);
  const [loading, SetLading] = useState(true);
  useEffect(() => {
    axios
      .get("/auth/v0/profile")
      .then((res) => {
        SetUser(res.data.data);
        SetLading(false);
      })
      .catch(() => router.push("/login"));
  }, []);
  if (loading) {
    return <> loading</>;
  }
  if (user) {
    return (
      <AdminContext>
        <SidebarMenuOnclick />
        <SidebarCloseMenu />
        <div className="xl:ps-[300px] h-[100vh] overflow-y-auto bg-white relative">
          <ProfileMenuClick />
          <div className="px-3 xl:px-8 mt-8 ">{children}</div>
        </div>
      </AdminContext>
    );
  }
}
