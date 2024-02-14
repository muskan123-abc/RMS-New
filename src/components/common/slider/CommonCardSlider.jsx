import React, { useRef } from "react";
import Slider from "react-slick";
import {
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  DownloadIcon,
} from "../Icons";
import CustomButton from "../fields/button/CustomButton";
import image from "../../../assets/images/romanceTvShows/webp/img-1.webp";
import { ratingStars } from "../../../utils/CommonFunction";

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
    infinite: true,
    nextArrow: ".left-arrow",
    prevArrow: ".right-arrow",
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="relative min-[1440px]:max-w-[850px] min-[1530px]:max-w-[950px] min-[1440px]:mx-auto 3xl:max-w-[1200px] min-[1920px]:max-w-full min-[1920px]:mx-0   watch_bg_shadow z-10 after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 sm:after:w-[343px] after:w-[143px] sm:after:h-[343px] after:h-[143px] after:rounded-full after:z-0">
          <Slider ref={watch_slider} {...settings}>
            {contentArr.map((obj, i) => (
              <div>
                <div className="sm:max-w-[360px] group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2 bg-[#1A1917] mx-2 mb-2">
                  <div className={`flex rounded-xl w-full`}>
                    <div>
                      <div className="overflow-hidden rounded-md">
                        <img
                          height={303}
                          width={347}
                          className="group-hover:scale-110 duration-300 rounded-[6px] w-full"
                          src={image}
                          alt="img"
                          loading="lazy"
                        />
                      </div>
                      <div className=" mt-4 ps-[11px] pb-[11px]">
                        <h5 className="font-poppins text-sm xl:text-xl  font-semibold text-white opacity-90 mb-0">
                          Magna etiam
                        </h5>
                        <p className="font-poppins text-base font-normal text-light-gray mt-1 mb-2">
                          Your rating:5/5
                        </p>
                        <span className="flex gap-1">{ratingStars(5)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className=" justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 hidden xl:flex">
            <button
              aria-label="Slider Arrow"
              onClick={handleLeftArrow}
              className={`common-arrow left-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:-translate-x-full left-[-20px] 
`}>
              <CommonLeftArrowIcon />
            </button>
            <button
              aria-label="Slider Arrow"
              onClick={handleRightArrow}
              className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 lg:translate-x-full right-[-20px] `}>
              <CommonRightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCardSlider;
