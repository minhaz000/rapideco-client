"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "../hooks/hook.axios";
const getProducts = (categoryValue: any) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        `api/v0/products?is_delete=false&category_info._id=${categoryValue}`
      );
      return res.data;
    },
  });
  return { products, isLoading };
};
export default getProducts;
