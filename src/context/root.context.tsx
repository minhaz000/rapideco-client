"use client";
import { useQueryData } from "@/hooks/hook.query";
import React, { createContext, useContext, useEffect, useState } from "react";
const RootContext = createContext("");
function Context(props: any) {
  const Cart = useQueryData(["get cart"], "/api/v0/cart");
  const [collapseMenu, setCollapseMenu] = useState(false);

  const [settingsData, setSettingsData] = useState({});
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
  const value: any = { Cart, collapseMenu, setCollapseMenu, settingsData };
  return (
    <RootContext.Provider value={value}> {props.children}</RootContext.Provider>
  );
}

export default Context;

const useRootContext = () => useContext(RootContext);

export { useRootContext };
