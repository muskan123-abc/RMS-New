import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChennalIcon, ShareIcon, StarGrey, YellowStar } from "../common/Icons";
import { VideoTabs, subscribedHomeVideo } from "../../utils/Helper";
import { formatNumber } from "../../utils/CommonFunction";

const SubscribedVideos = () => {
  const [showVideoTabs, setShowVideoTabs] = useState(0);
  // REVIEW RATTING STAR FUNCTION
  const ratingStars = (rating) => {
    const stars = [];
    const roundedRating = Math.floor(rating);
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<YellowStar key={i} />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<StarGrey key={i} />);
    }
    return stars;
  };
  // const { setCardData } = useStateProvider();
  const navigate = useNavigate();
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    // setCardData(value);
  };
  return (
    <div>
      <div className="overflow-x-scroll">
        <div className="flex py-[30px] min-w-[590px] ">
          {VideoTabs.map((value, index) => {
            return (
              <button
                onClick={() => setShowVideoTabs(index)}
                key={index}
                className={`text-white ff_poppins flex gap-2 items-center py-2.5 px-4 relative duration-300 ${
                  showVideoTabs === index
                    ? "after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full after:bg-white after:bg-opacity-25 bg-white_gradient"
                    : ""
                }`}
              >
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
              className="px-[10px] flex h-full md:w-[33.3%] w-1/2 max-[575.9px]:w-full"
            >
              <div className="p-[7px] border-[2px] border-solid border-[#FFFFFF40] rounded-lg account_library_slider_card h-full flex cursor-pointer justify-between flex-col group">
                <div>
                  <div className="rounded-[4.4px] overflow-hidden">
                    <img
                      width={208}
                      height={161}
                      loading="lazy"
                      className="w-full group-hover:scale-105 duration-200"
                      src={value.image}
                      alt="top-movie"
                    />
                  </div>
                  <h3 className="ff_poppins font-medium text-[13px] text-white opacity-90 mb-0 pt-[9px]">
                    {value.title}
                  </h3>
                  <span className="flex items-center text-2xl text-white">
                    <ChennalIcon />+
                  </span>
                </div>
                <div>
                  <h4 className="ff_poppins font-normal text-xs opacity-70 text-white pb-1">
                    YM Movie Trailer
                  </h4>
                  <div className="flex gap-[13px]">
                    <h4 className="ff_poppins font-normal text-[12px] opacity-70 text-white">
                      {formatNumber(value.views)} views
                    </h4>
                    <h4 className="ff_poppins font-normal text-[12px] opacity-70 text-white flex justify-center items-center gap-1">
                      <span className="text-[30px] leading-[12px]">·</span>
                      {value.realsetime}
                    </h4>
                  </div>
                  <div className="flex gap-1 pt-4 pb-[9px]">
                    {ratingStars(value.rating)}
                  </div>
                  <div className="flex flex-col  w-full gap-2 sm:gap-4 justify-between mt-4">
                    <span className="flex w-full">
                      <button className=" common_bg_gradient_color ff_inter font-semibold text-[16px] text-white border w-full py-[11px] px-1 lg:px-4 rounded overflow-hidden  border-solid border-[#f2cd75] hover:border  border-transparent  after:bg-black  z-10 flex justify-center relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
                        Add a Watchlist
                      </button>
                    </span>
                    <span className="flex w-full">
                      <button className=" common_bg_gradient_color ff_inter font-semibold text-[16px] text-white border w-full py-[11px] px-1 lg:px-4 rounded overflow-hidden  border-solid border-[#f2cd75] hover:border  border-transparent  after:bg-black  z-10 flex justify-center items-center relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
                        <ShareIcon />
                        Share
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscribedVideos;
