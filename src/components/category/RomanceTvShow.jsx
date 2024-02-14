import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { romanceSlider } from "./Helper";

const RomanceTvShow = () => {
  return (
    <>
      <div className="relative py-20 z-10">
        <h2 className="secondry_heading pb-8 sm:pb-14">
          <span>Romance</span> TV Shows
        </h2>
        <CommonCardSlider contentArr={romanceSlider} />
      </div>
    </>
  );
};

export default RomanceTvShow;
