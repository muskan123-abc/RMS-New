import React from "react";
import CommonBigCardSlider from "../common/slider/CommonBigCardSlider";
import image from "../../assets/images/webp/footer-bg-reel-img-3.webp";
import { useLocation } from "react-router";
const MostRatedMovies = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <div
        className={` bg-gradient  w-[326px] h-[326px] rounded-[326px] blur-[250px] absolute left-[-50px] bottom-[-50px] z-10 ${
          location.pathname === "/category" ? "hidden" : "hidden md:block" //ACTIVE ROUTES
        }`}></div>
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
        <CommonBigCardSlider />
      </div>
    </div>
  );
};

export default MostRatedMovies;
