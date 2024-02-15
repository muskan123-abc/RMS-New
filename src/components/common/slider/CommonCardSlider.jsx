import React, { useRef } from "react";
import Slider from "react-slick";
import { ratingStars } from "../../../utils/CommonFunction";
// import heartIcon from "../../../assets/images/svg/heart.svg";
import CustomButton from "../fields/button/CustomButton";

import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../Icons";
const CommonCardSlider = ({ contentArr }) => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 3,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 962,
      //   settings: {
      //     slidesToShow: 2,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto z-10 relative">
        <div className="relative pt-12 xl:pt-[60px] min-[1440px]:max-w-[880px] min-[1440px]:mx-auto min-[1530px]:max-w-[980px] 3xl:max-w-[1200px]  min-[1920px]:max-w-full min-[1920px]:mx-0">
          <Slider ref={watch_slider} {...settings} className="pb-8 xl:pb-0">
            {contentArr.map((obj, i) => (
              <div key={i} className="px-6 sm:px-0">
                <div className="sm:max-w-[300px]xl:max-w-[360px] group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2 bg-[#1A1917] mx-6sm: mx-auto xl:mx-2 mb-2 relative">
                  {/* <div className="absolute top-[6%] right-[6%]">
                    <img src={heartIcon} alt="heart-icon" />
                  </div> */}
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
                      <div className=" mt-4 pb-[11px]">
                        <h5 className="font-poppins text-sm xl:text-xl font-semibold text-white opacity-90 mb-0 ps-[11px]">
                          {obj.title}
                        </h5>
                        <span className="flex items-center text-2xl text-white ps-[11px]">
                          <ChennalIcon />+
                        </span>
                        <p className="font-poppins text-base font-normal text-light-gray mt-1 mb-2 ps-[11px]">
                          {obj.rating}
                        </p>
                        <span className="flex gap-1  ps-[11px]">
                          {ratingStars(4)}
                        </span>
                        <div className="flex w-full gap-2 sm:gap-4 justify-between mt-4 ">
                          <CustomButton
                            title=" Add a Watchlist" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles=" !px-0 flex justify-center" // add custom styles  \\ use custom styles with importent
                            setButtonFull="w-full"
                          />
                          <CustomButton
                            title="Share" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles=" flex justify-center " // add
                            icon={<ShareIcon />}
                            setButtonFull="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 hidden xl:flex">
            <button
              aria-label="Slider Arrow"
              onClick={handleLeftArrow}
              className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:-translate-x-full left-[-5px]`}
            >
              <CommonLeftArrowIcon />
            </button>
            <button
              aria-label="Slider Arrow"
              onClick={handleRightArrow}
              className={`common-arrow right-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:translate-x-full right-[-5px] `}
            >
              <CommonRightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCardSlider;
