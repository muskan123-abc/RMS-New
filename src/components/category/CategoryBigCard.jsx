import React from "react";
import CommonBigCardSlider from "../common/slider/CommonBigCardSlider";

const CategoryBigCard = ({ showSidebar }) => {
  return (
    <>
      <div className="pb-20 sm:py-20 relative bg_most_rated_bg">
        <CommonBigCardSlider showSidebar={showSidebar} />
      </div>
    </>
  );
};

export default CategoryBigCard;
