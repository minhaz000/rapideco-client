"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQueryData } from "@/hooks/hook.query";
const AdminContext = createContext("");
function Context(props: any) {
  const Categories = useQueryData(
    ["all categories"],
    props.url || "/api/v0/categories?is_delete=false&parent_info._id=null"
  );
  const Brands = useQueryData(["all brands "], props.url || "api/v0/brands");
  const Atrribute = useQueryData(
    ["all atrributes "],
    props.url || "/api/v0/attributes"
  );

  const [settingsData, setSettingsData] = useState({});
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/site.settings.json", {
          next: { revalidate: 60 },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSettingsData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);
  const value: any = {
    Categories,
    Brands,
    Atrribute,
    settingsData,
    mobileMenu,
    setMobileMenu,
  };
  return (
    <AdminContext.Provider value={value}>
      {" "}
      {props.children}
    </AdminContext.Provider>
  );
}

export default Context;

const useAdminContext = (url?: string) => {
  Context({ url });
  return useContext(AdminContext);
};
export { useAdminContext };
