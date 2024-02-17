import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils/CommonFunction";
import CustomInput from "../common/fields/CustomInput";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
  StarGrey,
  YellowStar,
} from "../common/Icons";
import CustomButton from "../common/fields/button/CustomButton";
const LibrarySliderCards = ({
  LibrarySliderData,
  heading,
  icon,
  sliderArrowHidden,
  mostRankedSliderArrow,
  sliderParent,
}) => {
  //REF FOR TARGET SLIDER-ARROWS
  const playlist_slider = useRef(null);

  //SECTION SLIDER ACTIVE ARROW FUNCTION
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
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cardData, setCardData] = useState();
  const navigate = useNavigate();
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    setCardData(value);
  };
  return (
    <>
      <div className="w-full min-[1440px]:pe-4 3xl:pe-0 min-[1440px]:pl-4">
        {/* PLAYLIST SLIDER*/}
        <div
          className={`flex justify-between pb-4 sm:pb-[30px] px-[10px] xl:px-0 ${sliderArrowHidden} `}
        >
          <div className="flex items-center gap-[10px]">
            {icon}
            <h3 className="font-medium text-white sm:text-[22px] text-lg">
              {heading}
            </h3>
          </div>
          <div className="flex gap-5">
            {/* SLIDER ARROW Start here*/}
            <button
              aria-label="Slider Arrow"
              onClick={SliderLeftArrow}
              className={`common-arrow left-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent`}
            >
              <CommonLeftArrowIcon />
            </button>
            <button
              aria-label="Slider Arrow"
              onClick={SliderRightArrow}
              className={`common-arrow right-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent`}
            >
              <CommonRightArrowIcon />
            </button>
          </div>
        </div>
        {/* MOST RANKED HEADING AND SEARCH */}
        <div className={`${mostRankedSliderArrow}`}>
          <div className="flex lg:hidden gap-[11px] sm:min-w-[358px] items-center mb-5 px-[10px]">
            {icon}
            <h4 className="font-medium text-white sm:text-xl text-base ">
              {heading}
            </h4>
          </div>
          <div className="flex w-full custom-sm:gap-[27px] gap-5 items-center sm:pb-[30px] pb-4 px-[10px] xl:px-0 custom-sm:flex-row flex-col">
            <div className="lg:flex hidden gap-[11px] min-w-[358px] items-center">
              {icon}
              <h4 className="font-medium text-white sm:text-xl text-base">
                {heading}
              </h4>
            </div>
            <div className="w-full">
              <CustomInput
                placeholder="Search"
                customStyles="w-full"
                isButtonVisible={true}
              />
            </div>
            <div className="flex gap-5 ms-auto">
              {/* ARROW SLIDER BUTTON*/}
              <button
                aria-label="Slider Arrow"
                onClick={SliderLeftArrow}
                className={`common-arrow left-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent  `}
              >
                <CommonLeftArrowIcon />
              </button>
              <button
                aria-label="Slider Arrow"
                onClick={SliderRightArrow}
                className={`common-arrow right-arrow bg-transparent sm:w-10 sm:h-10 w-9 h-9 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent `}
              >
                <CommonRightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        {/* SLIDER CODE START HERE */}
        <Slider
          ref={playlist_slider}
          {...settings}
          className={`${sliderParent}`}
        >
          {/* SLIDER DATA BY MAP */}
          {LibrarySliderData.map((obj, index) => {
            return (
              <div
                onClick={() => onNavigateHandler(obj)}
                key={index}
                className="px-[10px] flex h-full"
              >
                <div className="p-[7px] border-[2px] border-solid border-white/40 rounded-lg account_library_slider_card h-full flex cursor-pointer justify-between flex-col group">
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
                    <h3 className="font-medium text-[13px] text-white opacity-90 mb-0 pt-[9px]">
                      {obj.title}
                    </h3>
                    <span className="flex items-center text-2xl text-white">
                      <ChennalIcon />+
                    </span>
                  </div>
                  <div>
                    <div className="flex gap-[13px]">
                      <h4 className="text-xs opacity-70 text-white">
                        {formatNumber(obj.views)} views
                      </h4>
                      <h4 className="text-xs opacity-70 text-white flex justify-center items-center gap-1">
                        <span className="text-[30px] leading-[12px]">·</span>
                        {obj.realsetime}
                      </h4>
                    </div>
                    <div className="flex gap-1 pt-4 pb-[9px]">
                      {ratingStars(obj.rating)}
                    </div>
                    <div className="flex flex-col w-full gap-2 sm:gap-4 justify-between mt-4">
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

export default LibrarySliderCards;
