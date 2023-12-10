import axios from "../../../hooks/hook.axios";
import { headers } from "next/headers";
import SinglePage from "./SinglePage";
export const generateMetadata = async ({ searchParams: { _id } }: any) => {
  const headersList = headers();
  const singleData = await axios({
    headers: { origin: process.env.HOST },
    method: "GET",
    url: `/api/v0/product/${_id}`,
  });
  console.log(singleData.data);
  return {
    title: singleData?.data?.data?.title,
  };
};
const SingleProduct = async () => {
  return <SinglePage />;
};

export default SingleProduct;
