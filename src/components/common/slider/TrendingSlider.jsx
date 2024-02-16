import React, { useRef } from "react";
import Slider from "react-slick";
import trendingIcon from "../../../assets/images/trending/trending_icon.webp";
import { ratingStars } from "../../../utils/CommonFunction";
import { TrendingSliderList } from "../../trending/Helper";
import { CommonLeftArrowIcon, CommonRightArrowIcon, ShareIcon } from "../Icons";
import CustomButton from "../fields/button/CustomButton";
const TrendingSlider = ({ sliderHeading, sliderIcon }) => {
  //REF FOR TARGER SLIDER-ARROWS
  const playlist_slider = useRef(null);

  //SECTION SLIDER ACTIVE ARROW FUNTION
  const handleLeftArrow = () => {
    playlist_slider.current.slickPrev();
  };
  const handleRightArrow = () => {
    playlist_slider.current.slickNext();
  };
  // SLIDER-SETTINGS
  var trendingSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1023.9,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[1320px] pt-20 px-6 pb-16 md:pb-32  mx-auto ">
        <div className="flex justify-between pb-5 md:pb-8 pt-5">
          <div className="flex items-center gap-2.5">
            {sliderIcon ? (
              <img src={trendingIcon} alt="trending" width={28} />
            ) : (
              ""
            )}
            <h3 className="font-poppins font-medium text-white text-xxl">
              {sliderHeading}
            </h3>
          </div>
          {/* SLIDER ARROWS  */}
          <div className="flex gap-5">
            <button
              aria-label="Slider Arrow"
              onClick={handleLeftArrow}
              className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent `}
            >
              <CommonLeftArrowIcon />
            </button>
            <button
              aria-label="Slider Arrow"
              onClick={handleRightArrow}
              className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent`}
            >
              <CommonRightArrowIcon />
            </button>
          </div>
        </div>
        {/* PLAY LIST LIBRARY SLIDER  */}
        <Slider
          ref={playlist_slider}
          {...trendingSlider}
          // className={` slider_hight_equal ${sliderParant}`}
        >
          {/* PLAY LIST SLIDER DATA BY MAP */}
          {TrendingSliderList.map((obj, index) => {
            return (
              <div
                //   onClick={() => onNavigateHandler(obj)}
                key={index}
                className="px-[10px] flex h-full"
              >
                <div className="p-2 border-[2px] bg-[#2c271f] border-solid border-[#FFFFFF40] rounded-lg  h-full flex cursor-pointer justify-between flex-col group">
                  <div>
                    <div className="rounded-[4.4px] overflow-hidden">
                      <img
                        width={208}
                        height={161}
                        loading="lazy"
                        className="w-full group-hover:scale-105 duration-200"
                        src={obj.image}
                        alt="top-movie"
                      />
                    </div>
                    <h3 className="font-poppins font-medium text-sm text-white opacity-90 mb-0 pt-2.5">
                      {obj.title}
                    </h3>
                    <span className="flex gap-1.5 items-center text-2xl text-white">
                      {obj.channel} <span> + </span>
                    </span>
                    <p className="font-inter font-normal text-xs leading-[118%] opacity-70">
                      {obj.subtile}
                    </p>
                    <div className="flex items-center mt-0.5 opacity-70">
                      <p className="me-[31px] font-poppins text-xs leading-[118%]">
                        {obj.rank}
                      </p>
                      <ol className="!list-disc">
                        <li className="marker:text-xs">
                          <p className="font-poppins text-xs leading-[118%]">
                            {obj.time}
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <div className="flex gap-1 pb-3.5">
                      {ratingStars(obj.rating)}
                    </div>
                    <div className="flex flex-col w-full gap-2 sm:gap-2.5 justify-between">
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
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
