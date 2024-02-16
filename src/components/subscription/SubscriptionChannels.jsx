import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { CommonLeftArrowIcon, UnsubscribeBell } from "../common/Icons";
import { subscribedChannels } from "../../utils/Helper";

const SubscriptionChannels = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleLeftArrow = () => {
    sliderRef.current.slickPrev();
  };

  const handleRightArrow = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 466,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (currentSlide) => {
      setSelectedSlide(currentSlide);
    },
  };

  const handleSlideClick = (index) => {
    setSelectedSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col gap-y-5 w-full">
        <div className="overflow-x-hidden">
          <Slider
            ref={sliderRef}
            {...settings}
            className="flex gap-3 flex-wrap ">
            {subscribedChannels.map((value, index) => (
              <div
                key={index}
                className="sm:pe-3 px-1.5 "
                onClick={() => handleSlideClick(index)}>
                <div
                  className={`flex gap-2 py-1.5 rounded-md px-2.5 border cursor-pointer border-white border-opacity-25 bg-white bg-opacity-10 items-center sm:justify-start justify-center ${
                    selectedSlide === index ? "channel_button" : ""
                  }`}>
                  <img src={value.image} alt="channel" />
                  <h3 className="font-inter text-sm text-white whitespace-nowrap">
                    {value.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex gap-5 ps-6 justify-center">
          <button
            aria-label="Slider Arrow"
            onClick={handleLeftArrow}
            className={`common-arrow left-arrow flex justify-center items-center bg-transparent w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent`}>
            <CommonLeftArrowIcon />
          </button>
          <button
            aria-label="Slider Arrow"
            onClick={handleRightArrow}
            className={`common-arrow left-arrow bg-transparent flex justify-center items-center rotate-180 w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent`}>
            <CommonLeftArrowIcon />
          </button>
        </div>
      </div>
      {subscribedChannels.map((value, index) => (
        <div
          key={index}
          className={`flex gap-5 pt-[30px]  ${
            selectedSlide === index ? "block" : "hidden"
          }`}>
          <img className="w-[126px] h-auto" src={value.image} alt="p-movies" />
          <div>
            <h3 className="text-white font-poppins font-medium text-2xl opacity-90">
              {value.title}
            </h3>
            <h4 className="text-white font-poppins pb-6 opacity-70 text-sm">
              929K Subscribers
            </h4>
            <button className="common-border-button items-center gap-2.5 ff_inter font-semibold text-base text-white opacity-90 w-full py-[11px] px-4 rounded overflow-hidden border border-solid border-light-yellow bg-black hover:border-transparent after:bg-[#a97424]  z-10 flex justify-center relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
              <UnsubscribeBell /> Unsubscribe
            </button>
          </div>
        </div>
      ))}
      <div className="p-2.5 bg-white bg-opacity-[8%] mt-[30px] rounded-md">
        <h4 className="font-poppins text-sm text-white/70  max-w-[709px] 2xl:max-w-[900px]">
          Elit eu maecenas augue lorem{" "}
          <span className="text-white font-semibold"> malesuada </span> amet
          mattis risus. Luctus hac at pharetra erat vivamus fusce sit nec.
          Interdum ornare velit consectetur et purus ultricies egiquet{" "}
          <span className="text-white font-semibold"> udipiscing </span>{" "}
          volutpat.
        </h4>
      </div>
    </>
  );
};

export default SubscriptionChannels;