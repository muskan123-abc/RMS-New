import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { adventureSlider } from "./Halper";

const TvActionAdventure = () => {
  return (
    <>
      <div className="relative py-20 z-10">
        <h2 className="secondry_heading pb-8 sm:pb-14">
          TV action & <span>Adventure</span>
        </h2>
        <CommonCardSlider contentArr={adventureSlider} />
      </div>
    </>
  );
};

export default TvActionAdventure;
