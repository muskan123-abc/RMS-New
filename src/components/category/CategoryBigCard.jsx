import React from "react";
import { ratingStars } from "../../utils/CommonFunction";
import CommonBigCardSlider from "../common/slider/CommonBigCardSlider";

const CategoryBigCard = ({ showSidebar }) => {
  return (
    <>
      <div className="pb-20 sm:py-20 px-2lg:px-6 relative bg_most_rated_bg">
        <CommonBigCardSlider showSidebar={showSidebar} />
      </div>
    </>
  );
};

export default CategoryBigCard;
