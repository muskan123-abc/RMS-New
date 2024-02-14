import React, { useRef } from "react";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../Icons";
import trendingIcon from "../../../assets/images/trending/trending_icon.webp";
import Slider from "react-slick";
import { TrendingSliderList } from "../../trending/Helper";
const TrendingSlider = () => {
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
  var settings = {
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
      <section>
        <div className="max-w-[1320px] px-6 mx-auto">
          <div className="flex justify-between pb-9 pt-6">
            <div className="flex items-center gap-[10px]">
              <img src={trendingIcon} alt="trending" width={20} />
              <h3 className="font-poppins font-medium text-white text-xxl">
                Trading
              </h3>
            </div>
            {/* SLIDER ARROWS  */}
            <div className="flex gap-10">
              <button
                aria-label="Slider Arrow"
                onClick={handleLeftArrow}
                className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent `}
              >
                <CommonLeftArrowIcon />
              </button>
              <button
                aria-label="Slider Arrow"
                onClick={handleRightArrow}
                className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent`}
              >
                <CommonRightArrowIcon />
              </button>
            </div>
          </div>
          {/* PLAY LIST LIBRARY SLIDER  */}
          <Slider
            ref={playlist_slider}
            {...settings}
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
                  <div className="p-[7px] border-[2px] border-solid border-[#FFFFFF40] rounded-lg account_library_slider_card h-full flex cursor-pointer justify-between flex-col group">
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
                      <h3 className="ff_poppins font-medium text-[13px] text-white opacity-90 mb-0 pt-[9px]">
                        {obj.title}
                      </h3>
                      <span className="flex items-center text-2xl text-white">
                        <ChennalIcon />+
                      </span>
                    </div>
                    <div>
                      <div className="flex gap-[13px]"></div>
                      <div className="flex gap-1 pt-4 pb-[9px]">
                        {/* {ratingStars(obj.rating)} */}
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
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TrendingSlider;
