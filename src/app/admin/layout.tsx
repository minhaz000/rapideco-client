import AdminContext from "@/context/admin.context";
import SidebarMenuOnclick from "./DashboardHome/SidebarMenuOnclick";
import SidebarCloseMenu from "./DashboardHome/SidebarCloseMenu";
import ProfileMenuClick from "./DashboardHome/ProfileMenuClick";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const {isError,isSuccess,user } = useAdminContext();

  // if (isError) {
  //   router.push("/login");
  // }
  // if (user?.data && isSuccess) {
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
  // }
}
