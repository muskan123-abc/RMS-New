import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { mostPopularSlider } from "./Halper";
import reelImage from "../../assets/images/webp/footer-bg-reel-img-2.webp";

const MostPopular = () => {
  return (
    <div className="relative pt-7 pb-20 z-10">
      <img
        className="absolute right-[-30px] xl:right-0 top-8 xl:top-[-10%] max-w-[8%] xl:max-w-[13%] min-w-[100px] z-0 hidden lg:block"
        src={reelImage}
        alt="reel"
      />
      <h2 className="secondry_heading pb-8 sm:pb-14">
        Most <span>Popular</span>
      </h2>
      <CommonCardSlider contentArr={mostPopularSlider} />
    </div>
  );
};

export default MostPopular;
