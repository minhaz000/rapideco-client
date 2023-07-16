"use client";
import React, { createContext, useContext } from "react";

export const RootContext = createContext("");
const value: any = { name: "minhaz" };
function Context(props: any) {
  return (
    <RootContext.Provider value={value}> {props.children}</RootContext.Provider>
  );
}

export default Context;
