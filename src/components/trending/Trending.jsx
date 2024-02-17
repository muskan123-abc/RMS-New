import React from "react";
import TrendingSlider from "../common/slider/TrendingSlider";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import { TrendingIcon } from "../common/icons/sidebar/SideBar";

const Trending = () => {
  return (
    <div className="bg-common-bg-image bg-fixed  bg-cover ">
      <TrendingSlider sliderHeading="Trending" sliderIcon={<TrendingIcon/>} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Trending;
