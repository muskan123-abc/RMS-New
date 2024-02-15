import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { romanceSlider } from "./Helper";
import xml from "../../assets/images/svg/XMLID_2_.svg";

const RomanceTvShow = () => {
  return (
    <>
      <div className="relative pb-20 sm:py-20 z-10">
        {/* left-top icon */}
        <span className="absolute left-[20px] top-0 hidden lg:block movieIcon_animation">
          <img src={xml} alt="xml take shoot" />{" "}
        </span>
        {/* Right-bottom icon */}
        <span className="absolute right-[30px] bottom-0 xl:bottom-[13%] hidden lg:block movieIcon_animation">
          <img src={xml} alt="xml take shoot" />{" "}
        </span>
        <h2 className="secondry_heading pb-8 sm:pb-14">
          <span>Romance</span> TV Shows
        </h2>
        <CommonCardSlider contentArr={romanceSlider} />
      </div>
    </>
  );
};

export default RomanceTvShow;