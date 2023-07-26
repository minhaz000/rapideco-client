"use client";
import axios from "../hooks/hook.axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext("");
function Context(props: any) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get("auth/v0/profile").then((res) => setUser(res.data));
    // axios.get("api/v0/categories").then((res) => setUser(res.data));
  }, []);

  const value: any = { user };
  return <RootContext.Provider value={value}> {props.children}</RootContext.Provider>;
}

export default Context;

const useRootContext = () => useContext(RootContext);

export { useRootContext };
