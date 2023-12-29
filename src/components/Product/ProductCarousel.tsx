"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import getProducts from "@/lib/getProducts";
import ProductSkeleton from "./ProductSkeleton";
import { useEffect, useState } from "react";

const ProductCarousel = ({ categoryValue }: any) => {
  // console.log(categoryValue);
  const [categoryId, setCategoryId] = useState(categoryValue);
  const { products, isLoading } = getProducts(categoryId);
  // const categoryProduct = products?.data?.filter(
  //   (pd: any) => pd?.category_info._id === categoryValue
  // );
  useEffect(() => {
    // console.log("ami change", categoryValue);
    setCategoryId(categoryValue);
  }, [categoryValue]);
  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {Array.from({ length: 5 }, (_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1020: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {products?.data?.map((product: any) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductCarousel;
