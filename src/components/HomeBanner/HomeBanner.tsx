"use client";
import React from "react";

import Image from "next/image";
import Slider1 from "../../assets/s1.png";
import Slider2 from "../../assets/s2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
  };
  return (
    <div
      className="max-w-screen-xl mx-auto px-3 lg:px-10 mt-4 relative"
      id="homeSlider"
    >
      <Slider {...settings}>
        <div>
          <Image src={Slider1} alt="" className="w-full rounded-md" />
        </div>
        <div>
          <Image src={Slider2} alt="" className="w-full rounded-md" />
        </div>
        <div>
          <Image src={Slider1} alt="" className="w-full rounded-md" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
