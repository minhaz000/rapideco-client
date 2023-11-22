import { useQuery, useMutation, UseMutateAsyncFunction } from "@tanstack/react-query";
import axios from "@/hooks/hook.axios";
import ErrorResponse from "@/interface/query.error";
interface ErrorDetail {
  type: string;
  message: string;
}

interface Errors {
  [key: string]: ErrorDetail;
}

interface Data {
  status: string;
  message: string;
  type: string;
  errors: Errors;
}

const useQueryData = (key: any[], url: string) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const res: any = await axios.get(url);
      return res.data;
    },
  });
};

//
const useMutationData = <T>(key: any[], method: "post" | "put", url: string) => {
  return useMutation<T, ErrorResponse>({
    mutationKey: key,
    mutationFn: async (payload: any) => {
      const res: any = await axios[method](url, payload);
      return res.data;
    },
  });
};

export { useQueryData, useMutationData };
