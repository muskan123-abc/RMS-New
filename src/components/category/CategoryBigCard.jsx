import React from "react";
import CommonBigCardSlider from "../common/slider/CommonBigCardSlider";

const CategoryBigCard = ({ showSidebar }) => {
  return (
    <>
      <div className="pb-20 sm:py-20 relative bg-[url('/src/assets/images/common/png/common-card-slider-bg-img.png')] bg-no-repeat bg-center bg-cover">
        <CommonBigCardSlider showSidebar={showSidebar} />
      </div>
    </>
  );
};

export default CategoryBigCard;
