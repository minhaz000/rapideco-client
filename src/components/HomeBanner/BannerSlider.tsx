import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRootContext } from "@/context/root.context";
const BannerSlider = () => {
  const { settingsData }: any = useRootContext();
  console.log(settingsData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
  };
  return (
    <Slider {...settings}>
      {settingsData?.body?.banner.map((item: any, index: number) => (
        <div key={index}>
          <img
            src={item?.img_url}
            alt=""
            className="w-full h-full md:h-[400px] object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
