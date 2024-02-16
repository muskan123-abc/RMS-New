import React, { useState } from "react";
import reel_image from "../../assets/images/webp/footer-bg-reel-img-2.webp"; // Importing the reel image
import { CommonXmildIcon } from "../common/Icons"; // Importing a common icon component
import ItemDetails from "./ItemDetails"; // Importing ItemDetails component
import VideoPlayer from "./VideoPlayer"; // Importing VideoPlayer component

const Hero = ({ showSidebar }) => {
  // STATE TO TRACK VIDEO
  const [videoClick, setVideoClick] = useState({}); // State hook to track video click

  return (
    <>
      <div className="mt-7 bg-common-bg-image bg-fixed bg-cover bg-no-repeat bg-center relative mb-14 pb-10 sm:pb-0 lg:mb-32 min-[1440px]:pt-[80px] min-[1440px]:pl-4">
        {/* ACTION TAKE SHOOT IMAGE  */}
        {/* Render the common icon component for the action take shoot image */}
        <span className=" absolute left-0 top-0 ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation 3xl:ps-0 3xl:left-[-8px] 3xl:top-12">
          <CommonXmildIcon />
        </span>
        {/* Another instance of the common icon component */}
        <span className=" absolute left-0 top-2/3 ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation">
          <CommonXmildIcon />
        </span>
        {/* Render the reel image */}
        <img
          className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[10%] min-w-[100px] z-0 hidden lg:block"
          src={reel_image}
          alt="reel"
        />
        {/* Main container */}
        <div
          className={`container max-w-full px-0 xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto max-[1439px]:mx-auto  z-20 relative ${
            showSidebar ? "ms-0" : "ms-auto"
          }`}>
          <div className="flex flex-col lg:flex-row justify-between px-4 custom-4xl:pt-0 pt-[100px] " >
            {/* Left section of the hero */}
            <div className="w-full lg:w-2/3 min-[1440px]:w-[65%] 3xl:w-[70%]  lg:pe-3 min-[1440px]:pe-0 3xl:pe-3">
              {/* Render VideoPlayer component */}
              <VideoPlayer videoClick={videoClick} />
            </div>
            {/* Right section of the hero */}
            <div className="lg:ps-3 w-full lg:w-1/3 min-[1440px]:w-[35%] 3xl:w-[30%] z-10 relative min-[1440px]:pe-3 3xl:pe-0">
              {/* Render ItemDetails component */}
              <ItemDetails setVideoClick={setVideoClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
