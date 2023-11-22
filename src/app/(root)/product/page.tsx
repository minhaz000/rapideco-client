import axios from "../../../hooks/hook.axios";
import SinglePage from "./SinglePage";
export const generateMetadata = async ({ searchParams: { _id } }: any) => {
  const singleData = await axios.get(`/api/v0/product/${_id}`);
  return {
    title: singleData?.data?.data?.title,
  };
};
const SingleProduct = async () => {
  return <SinglePage />;
};

export default SingleProduct;
