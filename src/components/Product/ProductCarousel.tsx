"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products }: any) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        {products?.data.map((product: any) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
