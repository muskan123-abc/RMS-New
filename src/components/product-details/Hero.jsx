import React, { useState } from "react";
import reel_image from "../../assets/images/svg/XMLID_2_.svg";
// import ItemPlayScreen from "./ProductPlayScreen";
// import ItemRelatedscreen from "./ProductRelatedscreen";
// import { CommonXmildIcon } from "../common/Icon";
import VideoPlayer from "./VideoPlayer";
import ItemDetails from "./ItemDetails";
import { CommonXmildIcon } from "../common/Icons";

const Hero = ({ showSidebar }) => {
  // STATE TO TRACK VIDEO
  const [videoClick, setVideoClick] = useState({});

  return (
    <>
      <div
        className="mt-7 bg-itempage-hero-bg bg-cover bg-no-repeat bg-center relative mb-32 min-[1440px]:pt-[80px] min-[1440px]:pl-4
     ">
        {/* ACTION TAKE SHOOT IMAGE  */}
        <span className=" absolute left-0 top-0 ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation 3xl:ps-0 3xl:left-[-8px] 3xl:top-12">
          <CommonXmildIcon />
        </span>
        <span className=" absolute left-0 top-2/3 ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation">
          <CommonXmildIcon />
        </span>
        <img
          className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[10%] min-w-[100px] z-0 hidden lg:block"
          src={reel_image}
          alt="reel"
        />
        <div
          className={`container max-w-full  xl:max-w-[1140px] 2xl:max-w-[1320px]  min-[2200px]:mx-auto me-auto max-[1439px]:mx-auto  z-20 relative ${
            showSidebar ? "ms-0" : "ms-auto"
          }`}>
          <div className="flex flex-col lg:flex-row justify-between">
            {/* ITEM PAGE LEFT HERO  */}
            <div className="w-full lg:w-2/3 min-[1440px]:w-[65%] 3xl:w-[70%]  lg:pe-3 min-[1440px]:pe-0 3xl:pe-3">
              <VideoPlayer videoClick={videoClick} />
            </div>
            {/* ITEM PAGE RIGHT HERO */}
            <div className="lg:ps-3 w-full lg:w-1/3 min-[1440px]:w-[35%] 3xl:w-[30%] z-10 relative min-[1440px]:pe-3 3xl:pe-0">
              <ItemDetails setVideoClick={setVideoClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
