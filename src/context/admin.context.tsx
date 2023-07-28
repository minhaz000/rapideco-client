"use client";
import React, { createContext, useContext } from "react";
import { useQueryData } from "@/hooks/hook.query";
const AdminContext = createContext("");
function Context(props: any) {
  const Categories = useQueryData(["categories"], "/api/v0/categories?is_delete=false&parent_info._id=null");
  const value: any = { Categories };
  return <AdminContext.Provider value={value}> {props.children}</AdminContext.Provider>;
}

export default Context;

const useAdminContext = () => {
  return useContext(AdminContext);
};
export { useAdminContext };
