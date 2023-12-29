"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import { useEffect, useState } from "react";
import axios from "@/hooks/hook.axios";

const ProductCarousel = ({ categoryValue }: any) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    axios.get(`/api/v0/products?is_delete=false&status=active&category_info._id=${categoryValue}`).then((res) => {
      setProducts(res?.data?.data);
      setIsloading(false);
    });
  }, []);
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
          {products?.map((product: any) => (
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
