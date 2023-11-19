"use client";
import axios from "../hooks/hook.axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext("");
function Context(props: any) {
  const [user, setUser] = useState(null);
  const [collapseMenu, setCollapseMenu] = useState(false);
  useEffect(() => {
    axios.get("auth/v0/profile").then((res) => setUser(res.data));
    // axios.get("api/v0/categories").then((res) => setUser(res.data));
  }, []);

  const value: any = { user, collapseMenu, setCollapseMenu };
  return (
    <RootContext.Provider value={value}> {props.children}</RootContext.Provider>
  );
}

export default Context;

const useRootContext = () => useContext(RootContext);

export { useRootContext };
