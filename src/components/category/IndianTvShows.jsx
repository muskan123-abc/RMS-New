import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { indianTvShowSlider } from "./Helper";
import xml from "../../assets/images/svg/XMLID_2_.svg";

const IndianTvShows = ({ showSidebar }) => {
  return (
    <>
      <div className="relative pb-20 sm:py-20 z-10">
        <span className=" bg-gradient w-[220px] h-[220px] rounded-[343px] blur-[131px] absolute right-[-50px] top-[80%] z-10"></span>
        <span className=" bg-gradient w-[220px] h-[220px] rounded-[343px] blur-[131px] absolute left-[-50px] top-0 z-10"></span>
        {/* left-top icon */}
        <span className="absolute left-[20px] top-0 hidden lg:block movieIcon_animation">
          <img src={xml} alt="xml take shoot" />{" "}
        </span>
        {/* Right-bottom icon */}
        <span className="absolute right-[30px] bottom-0 xl:bottom-[13%] hidden lg:block movieIcon_animation">
          <img src={xml} alt="xml take shoot" />{" "}
        </span>
        <h2 className="secondry_heading pb-8 sm:pb-14">
          Indian TV <span>Shows</span>
        </h2>
        <CommonCardSlider
          contentArr={indianTvShowSlider}
          showSidebar={showSidebar}
        />
      </div>
    </>
  );
};

export default IndianTvShows;
