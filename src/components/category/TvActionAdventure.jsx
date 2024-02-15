import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { adventureSlider } from "./Helper";
import image from "../../assets/images/webp/footer-bg-reel-img-3.webp";

const TvActionAdventure = () => {
  return (
    <>
      <div className="relative pb-20 sm:py-20 z-10">
        <img
          className="absolute left-[-40px] sm:top-[30px] top-[120px] lg:max-w-[130px] xl:max-w-[202px] md:max-w-[150px] max-w-[100px] hidden lg:block"
          src={image}
          loading="lazy"
          alt="reel"
        />
        <span className=" bg-gradient w-[220px] h-[220px] rounded-[343px] blur-[131px] absolute left-[-50px] bottom-0 z-10"></span>
        <h2 className="secondry_heading">
          TV action & <span>Adventure</span>
        </h2>
        <CommonCardSlider contentArr={adventureSlider} />
      </div>
    </>
  );
};

export default TvActionAdventure;
