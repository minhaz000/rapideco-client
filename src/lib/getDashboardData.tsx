"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "../hooks/hook.axios";
const getDashboardData = () => {
  const { data: dashboard } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await axios.get("/auth/v0/dashboard");
      return res.data;
    },
  });
  return { dashboard };
};
export default getDashboardData;
