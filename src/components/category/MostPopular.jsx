import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { mostPopularSlider } from "./Helper";
const MostPopular = () => {
  return (
    <div>
      <CommonCardSlider contentArr={mostPopularSlider} />
    </div>
  );
};

export default MostPopular;
