"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Slider1 from "../../assets/s1.png";
import Slider2 from "../../assets/s2.png";
const HomeBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image alt="slider 1" src={Slider1} className="rounded-md w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider 1" src={Slider2} className="rounded-md w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="slider 1" src={Slider1} className="rounded-md w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
