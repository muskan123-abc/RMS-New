import React from "react";
import CommonSmallCardSlider from "../common/slider/CommonSmallCardSlider";
import { FanFavoriteContent } from "./Halper";
const FanFavorite = () => {
  return (
    <div>
      <h2 className="secondry_heading">
        Fan <span>favorites</span>
      </h2>
      <div className="my-12">
        <CommonSmallCardSlider cardContent={FanFavoriteContent} />
      </div>
    </div>
  );
};

export default FanFavorite;
