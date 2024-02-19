import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatNumber, ratingStars } from "../../utils/CommonFunction";
import { ChennalIcon, ShareIcon } from "../common/Icons";
import CustomButton from "../common/fields/button/CustomButton";
import { subscribedHomeVideo, videoTabs } from "./Helper";

const SubscribedVideos = ({ scrollToTop }) => {
  const [showVideoTabs, setShowVideoTabs] = useState(0);

  // const { setCardData } = useStateProvider();
  const navigate = useNavigate();
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    //
  };
  return (
    <>
      <div className="overflow-x-scroll">
        <div className="flex py-[30px] min-w-[590px] ">
          {videoTabs.map((value, index) => {
            return (
              <button
                onClick={() => setShowVideoTabs(index)}
                key={index}
                className={`text-white font-poppins flex gap-2 items-center py-2.5 px-4 relative duration-300  ${
                  showVideoTabs === index
                    ? " after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full after:bg-white after:bg-opacity-25 bg-gradient-to-r from-white/10 to-white/0"
                    : " opacity-70"
                }`}>
                {value.image} {value.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-y-5">
        {subscribedHomeVideo.map((value, index) => {
          return (
            <div
              onClick={() => onNavigateHandler(value)}
              key={index}
              className="px-2.5 flex h-full w-full sm:w-6/12 md:w-4/12 ">
              <div
                onClick={() => scrollToTop()}
                className="p-[7px] border-[2px] border-solid border-white/40 rounded-lg account_library_slider_card h-full flex cursor-pointer justify-between flex-col group bg-graphite-gray w-full">
                <div>
                  <div className="rounded-[4.4px] overflow-hidden">
                    <img
                      loading="lazy"
                      width={208}
                      height={161}
                      className="w-full custom-xxs:h-[160px] custom-xs:h-[220px] custom-sm:h-[280px] sm:h-[180px] md:h-[140px] lg:h-[200px] object-cover xl:h-[205px] group-hover:scale-105 duration-200"
                      src={value.image}
                      alt="top-movie"
                    />
                  </div>
                  <h3 className="font-poppins font-medium text-[13px] text-white opacity-90 mb-0 pt-[9px]">
                    {value.title}
                  </h3>
                  <span className="flex items-center text-2xl text-white">
                    <ChennalIcon /> <span className="ms-1"> + </span>
                  </span>
                </div>
                <div>
                  <h4 className="font-poppins font-normal text-xs opacity-70 text-white pb-1">
                    YM Movie Trailer
                  </h4>
                  <div className="flex gap-[13px]">
                    <h4 className="font-poppins font-normal text-xs opacity-70 text-white">
                      {formatNumber(value.views)} views
                    </h4>
                    <h4 className="font-poppins font-normal text-xs opacity-70 text-white flex justify-center items-center gap-1">
                      <span className="text-[30px] leading-[12px]">·</span>
                      {value.realsetime}
                    </h4>
                  </div>
                  <div className="flex gap-1 pt-4 pb-[9px]">
                    {ratingStars(value.rating)}
                  </div>
                  <div className="flex flex-col w-full gap-2 sm:gap-2.5 justify-between mt-4">
                    <CustomButton
                      title="Add a Watchlist"
                      isGradient={true}
                      varient="button"
                      isVisible={true}
                      customStyles="justify-center !font-medium"
                    />
                    <CustomButton
                      title="Share"
                      isGradient={true}
                      varient="button"
                      isVisible={true}
                      customStyles="justify-center !font-medium"
                      icon={<ShareIcon />}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubscribedVideos;
