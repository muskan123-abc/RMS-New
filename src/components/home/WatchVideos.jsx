import React from "react";
import CommonVideoSlider from "../common/slider/CommonVideoSlider";
import { watchVideosSlider } from "./Halper";
import image from "../../assets/images/webp/footer-bg-reel-img-2.webp";
const WatchVideos = () => {
  return (
    <div
      className="relative pt-28
    ">
      <img
        className="absolute right-[-30px] xl:right-0 top-8 xl:top-0 max-w-[8%] xl:max-w-[13%] min-w-[100px] z-0 hidden lg:block"
        src={image}
        alt="reel"
      />
      <h2 className="secondry_heading">
        Watch <span>videos</span>
      </h2>

      <div className=" my-12">
        {" "}
        <CommonVideoSlider content={watchVideosSlider} />
      </div>
    </div>
  );
};

export default WatchVideos;