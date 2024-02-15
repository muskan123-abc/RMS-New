import React from "react";
import CommonBigCardSlider from "../common/slider/CommonBigCardSlider";
import image from "../../assets/images/webp/footer-bg-reel-img-3.webp";
import { useLocation } from "react-router";
const MostRatedMovies = ({ showSidebar }) => {
  const location = useLocation();

  return (
    <div className="relative">
      <img
        className="absolute right-0 sm:top-[94px] top-[120px] lg:max-w-[130px] xl:max-w-[202px] md:max-w-[150px] max-w-[100px] hidden lg:block"
        src={image}
        loading="lazy"
        alt="reel"
      />
      <h2 className="secondry_heading">
        Most rated <span>movies</span>
      </h2>
      <div className="my-12">
        {" "}
        <CommonBigCardSlider showSidebar={showSidebar} />
      </div>
    </div>
  );
};

export default MostRatedMovies;
