"use client";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedProduct from "./RelatedProduct";
import { useSearchParams } from "next/navigation";
import { useQueryData } from "@/hooks/hook.query";
import Loading from "../common/Loading";
import Image from "next/image";
const ProductSinglePage = () => {
  const sech: any = useSearchParams();
  const ID = sech.get("_id");
  const { data: product, isLoading } = useQueryData(
    ["get single data"],
    `/api/v0/product/${ID}`
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(product);
  return (
    <div>
      <ProductDetails />
      <div className="mt-10">
        <h2 className="inline-block border-2 border-b-0 pb-2 border-slate-200 rounded text-xl font-semibold px-2">
          Product Description
        </h2>
        <div className="mt-2">
          <div
            className="space-y-3"
            dangerouslySetInnerHTML={{ __html: product?.data?.description }}
          ></div>
          <div className="mt-8">
            {product.data?.description_img &&
              product.data?.description_img?.map((item: any) => (
                <Image
                  src={item.img_url}
                  alt="Description Image"
                  width={1000}
                  height={1000}
                  sizes="100%"
                />
              ))}
          </div>
        </div>
      </div>
      <RelatedProduct categoryID={product?.data?.category_info?._id} />
    </div>
  );
};

export default ProductSinglePage;
