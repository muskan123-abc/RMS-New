import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { indianTvShowSlider } from "./Helper";

const IndianTvShows = () => {
  return (
    <>
      <div className="relative py-20 z-10">
        <h2 className="secondry_heading pb-8 sm:pb-14">
          Indian TV <span>Shows</span>
        </h2>
        <CommonCardSlider contentArr={indianTvShowSlider} />
      </div>
    </>
  );
};

export default IndianTvShows;
