import React from "react";
import TrendingSlider from "../common/slider/TrendingSlider";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";

const Trending = () => {
  return (
    <div className="bg-common-bg-image bg_attachment_fixed  bg-cover ">
      <TrendingSlider />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Trending;
