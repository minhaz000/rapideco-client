"use client";
import React, { createContext, useContext } from "react";
import { useQueryData } from "@/hooks/hook.query";
const AdminContext = createContext("");
function Context(props: any) {
  const Categories = useQueryData(
    ["all categories"],
    props.url || "/api/v0/categories?is_delete=false&parent_info._id=null"
  );
  const Brands = useQueryData(["all brands "], props.url || "api/v0/brands");
  const value: any = { Categories, Brands };
  return <AdminContext.Provider value={value}> {props.children}</AdminContext.Provider>;
}

export default Context;

const useAdminContext = (url?: string) => {
  Context({ url });
  return useContext(AdminContext);
};
export { useAdminContext };
