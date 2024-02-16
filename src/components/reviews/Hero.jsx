import React from "react";
// import RatingBars from "../common/RatingBars";
import CustomInput from "../common/fields/CustomInput";
import Faqs from "../common/Faqs";
import CommonCards from "./CommonCards";
import { ArrowIcon, ReviewAndRationgIcon } from "./Helper";
import CommonButtons from "./CommonButtons";
import RatingBars from "../common/RatingBars";
import Footer from "../common/Footer";

const Hero = ({ showSidebar }) => {
  return (
    <div className="bg-common-bg-image bg_attachment_fixed  bg-cover bg-no-repeat relative pt-4 min-[1440px]:pt-[100px] ">
      <div className="bottom_blur_hero w-full h-[50px] absolute bottom-0 left-0"></div>
      <div
        className={`container xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto max-[1439px]:mx-auto px-6 ${
          showSidebar ? "ms-0" : "ms-auto"
        }`}
      >
        <div className="flex justify-between sm:items-center pb-8 w-full sm:flex-row flex-col gap-4">
          <h2 className="font-poppins font-medium text-white text-[22px] flex items-center gap-[11px]">
            <ReviewAndRationgIcon /> Reviews &
            <span className="common-text-gradient">Rating</span>
          </h2>

          <CustomInput
            placeholder="Search"
            customStylesInput="md:w-[435px] sm:w-[300px] w-full "
            isButtonVisible={true}
            buttonIcon={<ArrowIcon />}
            customStylesButton=" cursor-pointer"
          />
        </div>
        <CommonButtons />
        <RatingBars
          flexStructure="sm:!flex-row sm:items-end"
          ratingWidth="w-[240px]"
          ratingBarsWidth="!w-full !max-w-[1000px]"
        />
        <CommonCards />
      </div>
      <div className="sm:pt-[60px] pt-5">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
