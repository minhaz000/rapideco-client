import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "@/hooks/hook.axios";

const useQueryData = (key: any[], url: string) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      console.log("query fired");
      const res: any = await axios.get(url);
      return res.data;
    },
  });
};

//
const useMutationData = (key: any[], method: "get" | "post" | "delete" | "put" | "patch", url: string) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (payload: any) => {
      const res: any = await axios[method](url, payload);
      return res.data;
    },
  });
};

export { useQueryData, useMutationData };
