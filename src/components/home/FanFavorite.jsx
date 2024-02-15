import React from "react";
import CommonSmallCardSlider from "../common/slider/CommonSmallCardSlider";
import { FanFavoriteContent } from "../common/Helper";
import image from "../../assets/images/svg/XMLID_2_.svg";
const FanFavorite = ({ showSidebar }) => {
  return (
    <div className=" relative py-12 ">
      <span className=" absolute left-0 bottom-0 ps-6 hidden lg:block movieIcon_animation">
        <img src={image} alt=" alkternate " />
      </span>{" "}
      <div className=" bg-gradient max-w-[343px] h-[343px] rounded-[343px] blur-[250px] opacity-80 pointer-events-none absolute end-0 top-0 w-full "></div>
      <div className="common_bg_gradient_color  max-w-[343px] h-[343px] rounded-[343px] blur-[250px] opacity-70 absolute end-0 top-0 w-full hidden md:block"></div>
      <h2 className="secondry_heading">
        Fan <span>favorites</span>
      </h2>
      <div className="my-12 mx-auto">
        <CommonSmallCardSlider
          showSidebar={showSidebar}
          cardContent={FanFavoriteContent}
        />
      </div>
    </div>
  );
};

export default FanFavorite;
