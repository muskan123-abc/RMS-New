import React, { useRef } from "react";
import Slider from "react-slick";
import { ratingStars } from "../../../utils/CommonFunction";
import CustomButton from "../fields/button/CustomButton";

import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../Icons";
const CommonCardSlider = ({ contentArr, showSidebar }) => {
  const watch_slider = useRef(null);
  // Function to handle clicking the left arrow
  const handleLeftArrow = () => {
    watch_slider.current.slickPrev();
  };
  // Function to handle clicking the right arrow
  const handleRightArrow = () => {
    watch_slider.current.slickNext();
  };

  var settings = {
    dots: false,
    loop: true,
    infinite: true,
    nextArrow: ".left-arrow",
    prevArrow: ".right-arrow",
    arrows: false,
    speed: 500,
    slidesToShow: showSidebar ? 2 : 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: showSidebar ? 2 : 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: showSidebar ? 2 : 3,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: showSidebar ? 2 : 2,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToShow: 1.99,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={` mx-auto relative z-10 px-4 ${
          showSidebar
            ? " custom-2xl:max-w-[790px] custom-3xl:max-w-[870px]"
            : "max-w-[1140px]"
        }`}>
        <Slider ref={watch_slider} {...settings} className="pb-8 xl:pb-0">
          {contentArr.map((obj, i) => {
            return (
              <div key={i} className="px-3 lg:px-2">
                <div className="w-full group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-shadow-gray p-2 bg-light-black mx-auto xl:mx-2 mb-2 relative">
                  <div className={`flex rounded-xl w-full`}>
                    <div>
                      <div className="overflow-hidden rounded-md">
                        <img
                          height={303}
                          width={347}
                          className="group-hover:scale-110 duration-300 rounded-[6px] w-full"
                          src={obj.image}
                          alt="img"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-4">
                        <h5 className="font-poppins text-sm xl:text-xl font-semibold text-white opacity-90 mb-0">
                          {obj.title}
                        </h5>
                        <span className="flex items-center text-2xl text-white">
                          <ChennalIcon />+
                        </span>
                        <p className="font-poppins text-base font-normal text-light-gray mt-1 mb-2">
                          {obj.rating}
                        </p>
                        <span className="flex gap-1">{ratingStars(4)}</span>
                        <div className="flex w-full gap-2 sm:gap-4 justify-between mt-4 ">
                          <CustomButton
                            title=" Add a Watchlist" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles=" !px-0 flex justify-center  !text-sm lg:!text-base" // add custom styles  \\ use custom styles with importent
                            setButtonFull="w-full"
                          />
                          <CustomButton
                            title="Share" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles=" flex justify-center !text-sm lg:!text-base" // add
                            icon={<ShareIcon />}
                            setButtonFull="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 hidden xl:flex">
          <button
            aria-label="Slider Arrow"
            onClick={handleLeftArrow}
            className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:-translate-x-full left-[-2%]`}>
            <CommonLeftArrowIcon />
          </button>
          <button
            aria-label="Slider Arrow"
            onClick={handleRightArrow}
            className={`common-arrow right-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:translate-x-full right-[-2%] `}>
            <CommonRightArrowIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommonCardSlider;
