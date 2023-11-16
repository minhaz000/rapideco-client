"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Cat1 from "../../assets/category/2.png";
import Image from "next/image";
import Link from "next/link";
const BrandCarousel = ({ Brands }: { Brands: any }) => {
  return (
    <>
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
        {Brands?.data?.map((item: any) => (
          <SwiperSlide key={item._id}>
            <Link href="/">
              <Image src={Cat1} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BrandCarousel;
