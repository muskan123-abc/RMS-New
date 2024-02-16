import React, { useRef, useState } from "react";
// import {
//   ChennalIcon,
//   CommonLeftArrowIcon,
//   CommonRightArrowIcon,
//   SearchIcon,
//   ShareIcon,
//   StarGrey,
//   YellowStar,
// } from "../common/Icon";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
// import { useStateProvider } from "../common/StateContext";
import { formatNumber } from "../../utils/CommonFunction";
import CustomInput from "../common/fields/CustomInput";
import { ChennalIcon, ShareIcon, StarGrey, YellowStar } from "../common/Icons";

const AccountSlider = ({
  accountSliderData,
  heading,
  icon,
  sliderArrowHidden,
  mostRankedSliderArrow,
  sliderParant,
}) => {
  //REF FOR TARGER SLIDER-ARROWS
  const playlist_slider = useRef(null);

  //SECTION SLIDER ACTIVE ARROW FUNTION
  const SliderLeftArrow = () => {
    playlist_slider.current.slickPrev();
  };
  const SliderRightArrow = () => {
    playlist_slider.current.slickNext();
  };

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

  // const { setCardData } = useStateProvider();
  const [cardData,setCardData]=useState()
  const navigate = useNavigate();
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    setCardData(value);
  };
  return (
    <>
      <div className="tab_data w-full lg:pe-[16px] xl:pe-0 min-[1440px]:pe-4 3xl:pe-0 min-[1440px]:pl-4">
        {/* PLAYLIST SLIDER*/}
        <div
          className={`flex justify-between sm:pb-[30px] px-3 sm:px-0 ${sliderArrowHidden} `}
        >
          <div className="flex ps-3 items-center gap-[10px]">
            {icon}
            <h3 className="ff_poppins font-medium text-white sm:text-[22px] text-[18px]">
              {heading}
            </h3>
          </div>
          <div className="flex gap-5">
            {/* SLIDER ARROW*/}
            <button
              aria-label="Slider Arrow"
              onClick={SliderLeftArrow}
              className={`common-arrow left-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent `}
            >
              {/* <CommonLeftArrowIcon /> */}
              text
            </button>
            <button
              aria-label="Slider Arrow"
              onClick={SliderRightArrow}
              className={`common-arrow right-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent  `}
            >
              {/* <CommonRightArrowIcon /> */}
              text
            </button>
          </div>
        </div>
        {/* MOST RANKED VIDEO SLIDER */}
        <div className={`${mostRankedSliderArrow}`}>
          {" "}
          <div className="flex lg:hidden gap-[11px] sm:min-w-[358px] items-center mb-5 px-3 sm:px-0">
            {icon}
            <h4 className="ff_poppins font-medium text-white sm:text-[20px] text-[16px] ">
              {heading}
            </h4>
          </div>
          <div className="flex w-full custom-sm:gap-[27px] gap-[20px] items-center sm:pb-[30px] pb-4 px-3 sm:px-0 custom-sm:flex-row flex-col">
            <div className="lg:flex hidden gap-[11px] min-w-[358px] items-center">
              {icon}
              <h4 className="ff_poppins font-medium text-white sm:text-[20px] text-[16px]">
                {heading}
              </h4>
            </div>
            {/* SEARCH INPUT FORM */}
            {/* <form className="border border-solid border-[#82817F] rounded-[127px] flex items-center justify-between w-full">
              <input
                required
                className=" ff_poppins text-[14px] font-normal px-4 text-white bg-transparent sm:py-3 py-[6px] w-11/12 outline-none placeholder:text-white placeholder:font-normal placeholder:text-[14px]"
                type="text"
                placeholder="Search"
              />
              <button
                aria-label="Search"
                type="submit"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-[50%] p-2 flex justify-center items-center cursor-pointer common_bg_gradient_color">
                <SearchIcon />
              </button>
            </form> */}
            <CustomInput placeholder="Search" width="w-full" />
            <div className=" flex gap-5 ms-auto">
              {/* ARROW SLIDER BUTTON*/}
              <button
                aria-label="Slider Arrow"
                onClick={SliderLeftArrow}
                className={`common-arrow left-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent  `}
              >
                {/* <CommonLeftArrowIcon /> */}
                text2{" "}
              </button>
              <button
                aria-label="Slider Arrow"
                onClick={SliderRightArrow}
                className={`common-arrow right-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent `}
              >
                {/* <CommonRightArrowIcon /> */}
                text2{" "}
              </button>
            </div>
          </div>
        </div>
        {/* PLAY LIST LIBRARY SLIDER  */}
        <Slider
          ref={playlist_slider}
          {...settings}
          className={` slider_hight_equal ${sliderParant}`}
        >
          {/* PLAY LIST SLIDER DATA BY MAP */}
          {accountSliderData.map((value, index) => {
            return (
              <div
                onClick={() => onNavigateHandler(value)}
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
        </Slider>
      </div>
    </>
  );
};

export default AccountSlider;
