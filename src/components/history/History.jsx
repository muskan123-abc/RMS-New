import React from "react";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import TrendingSlider from "../common/slider/TrendingSlider";
import { HistoryIcon } from "../common/icons/sidebar/SideBar";

const History = () => {
  return (
    <>
      <div className="bg-common-bg-image bg-fixed bg-cover ">
        <TrendingSlider sliderHeading="History" sliderIcon={<HistoryIcon />} />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default History;
