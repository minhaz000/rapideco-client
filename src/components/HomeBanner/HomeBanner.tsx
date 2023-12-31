"use client";
import React from "react";
import "./Banner.css";
// import getSettings from "@/lib/getSettings";
import BannerSlider from "./BannerSlider";
const HomeBanner = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto px-3 lg:px-12 mt-[6px] relative"
      id="homeSlider"
    >
      <BannerSlider />
    </div>
  );
};

export default HomeBanner;
