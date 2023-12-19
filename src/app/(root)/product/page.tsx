import axios from "../../../hooks/hook.axios";
import SinglePage from "./SinglePage";
export const generateMetadata = async ({ searchParams: { _id } }: any) => {
  const singleData = await axios({
    headers: { origin: process.env.NEXT_PUBLIC_HOST },
    method: "GET",
    url: `/api/v0/product/${_id}`,
  });
  return {
    title: singleData?.data?.data?.title,
  };
};
const SingleProduct = async () => {
  return <SinglePage />;
};

export default SingleProduct;
