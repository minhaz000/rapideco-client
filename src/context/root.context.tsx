"use client";
import { useQueryData } from "@/hooks/hook.query";
import axios from "../hooks/hook.axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext("");
function Context(props: any) {
  const Cart = useQueryData(["get cart"], "/api/v0/cart");

  const value: any = { Cart };
  return <RootContext.Provider value={value}> {props.children}</RootContext.Provider>;
}

export default Context;

const useRootContext = () => useContext(RootContext);

export { useRootContext };
