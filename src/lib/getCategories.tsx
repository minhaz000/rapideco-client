"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "../hooks/hook.axios";
const getCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        "/api/v0/categories?is_delete=false&featured=true"
      );
      return res.data;
    },
  });
  return { categories, isLoading };
};
export default getCategories;
