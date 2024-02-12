import React, { useState } from "react";
import { formatNumber, ratingStars } from "../../../utils/CommonFunction";
import { useNavigate } from "react-router";
import CustomButton from "../fields/button/CustomButton";
import { DownloadIcon, StarGrey, YellowStar } from "../Icons";
import image from "../../../assets/images/webp/robin_hood.webp";
const CommonBigCard = () => {
  return (
    <>
      <div className=" px-10 py-[30px] bg-[#FFFFFF0A] backdrop-blur-[130px] w-full flex relative rounded-xl md:flex-row flex-col items-center gap-x-12 max-w-[1140px] mx-auto ">
        <div className=" rounded-[12px_0px_12px_0px] h-[14px] min-w-[280px] bg-gradient top-0 left-1/2 absolute -translate-x-[62%] after:absolute after:h-0 after:w-full after:bg-transparent after:-bottom-3 after:translate-x-[57px] after:border-b-4 after:border-dashed after:border-[#443925]"></div>
        <div className=" rounded-[0_12px_0_12px] h-[14px] min-w-[280px] bg-gradient bottom-0 right-0 absolute  after:absolute after:h-0 after:w-full after:bg-transparent after:-top-3 after:-translate-x-[57px] after:border-b-4 after:border-dashed after:border-[#443925]"></div>
        <div className=" opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px] rounded-[326px] blur-[250px] bg-[linear-gradient(135deg,#F2CD75_0%,#A97424_100%)]"></div>
        <div className="min-w-[270px] rounded-lg relative w-[270px] h-[381px]  overflow-hidden border-2 border-solid border-[#FFFFFF4D] common-shaddow max-w-[400px]">
          <img src={image} loading="lazy" alt="common content" />
        </div>
        <div className="mt-6 md:mt-0">
          <div className=" flex justify-between">
            <h2 className="tertiary_heading">Robin Hood</h2>
            <CustomButton
              title="DownLoad" //set button title
              isGradient={true} // is grident is  visible // controle  btn types
              varient="button" // set button type like  Link and  Button
              url="" // set url when button type  is link
              isVisible={true} // handle  button visibility
              customStyles="" // add custom styles  \\ use custom styles with importent
              icon={<DownloadIcon />} // add icon //
            />
          </div>

          <div className="flex gap-x-4 sm:gap-x-5 md:gap-x-7 mt-3  items-center">
            <p className="common_sub_pera">189K Reviews</p>
            <p className="common_sub_pera">29M+ Dpwnload</p>
            <p className="common_sub_pera">4+ Rated out of 5</p>
          </div>
          <div className="flex gap-1 items-center my-4 sm:my-5">
            <span className="flex gap-1">{ratingStars(3)}</span>
          </div>
          <p className="common_pera mb-4">
            Odio elit nulla tellus elementum. Odio proin dignissim venenatis
            ullamcorper. Sed enim et sed lorem. Quis et potenti tortor arcu
            egestas ac tortor non. Aliquet sem varius in eget sodales nisl
            pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet
            phasellus sociis urna. Faucibus quis dui etiam hendrerit amet
            pellentesque pellentesque.
          </p>
        </div>
      </div>
    </>
  );
};

export default CommonBigCard;
