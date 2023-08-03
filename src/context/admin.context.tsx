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
  const Atrribute = useQueryData(["all atrributes "], props.url || "/api/v0/attributes");
  const Products = useQueryData(["all products "], props.url || "/api/v0/products");
  const value: any = { Categories, Brands, Atrribute, Products };
  return <AdminContext.Provider value={value}> {props.children}</AdminContext.Provider>;
}

export default Context;

const useAdminContext = (url?: string) => {
  Context({ url });
  return useContext(AdminContext);
};
export { useAdminContext };
