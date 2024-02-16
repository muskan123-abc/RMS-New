import React from "react";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import TrendingSlider from "../common/slider/TrendingSlider";

const History = () => {
  return (
    <>
      <div className="bg-common-bg-image bg-fixed bg-cover ">
        <TrendingSlider sliderHeading="History" />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default History;
