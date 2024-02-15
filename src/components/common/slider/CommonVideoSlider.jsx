import React, { useRef, useState } from "react";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  PlayBtnIcon,
  ShareIcon,
} from "../Icons";
import Slider from "react-slick";
import { ratingStars } from "../../../utils/CommonFunction";
import CustomButton from "../fields/button/CustomButton";

const CommonVideoSlider = ({ content, showSidebar }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(-1);
  // Ref for the Slider component
  const watch_slider = useRef(null);

  // Ref for the video player
  const videoRef = useRef(null);

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
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    loop: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: 60,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className={` relative px-4 px:md-0  ${
        showSidebar
          ? " mx-auto  2xl:mr-auto custom-2xl:max-w-[790px] min-[1400px]:max-w-[870px]"
          : "mx-auto max-w-[1140px]"
      } `}>
      <Slider
        ref={watch_slider}
        {...settings}
        className="relative z-10 pb-8 xl:pb-0 watch_slider after:content-[''] after:absolute after:top-0 after:-translate-y-[20%] after:left-1/2 after:-translate-x-1/2 sm:after:w-[343px] after:w-[143px] sm:after:h-[343px] after:h-[143px] after:rounded-full after:-z-10 after:bg-[linear-gradient(135deg,_#f2cd75_0%,#a97424_100%)] after:blur-[130px]  after:opacity-70">
        {content &&
          content.map((value, index) => {
            return (
              <div key={index} className="px-[10px]  ">
                <div className="custom_dark_card_bg p-[10px] rounded-xl group h-full ">
                  <div className="relative overflow-hidden rounded-md sm:h-[250px] md:h-[190px] min-[885px]:h-[220px] lg:h-[305px]">
                    {isVideoPlaying === index ? (
                      <iframe
                        title="YouTube video player"
                        src={value.url}
                        width="100%"
                        height="438"
                        frameborder="0"
                        ref={videoRef}
                        controls
                        autoPlay
                        className="h-full xl:min-h-[287px] 2xl:min-h-[346.7px] lg:min-h-[259.7px] md:min-h-[182.9px] sm:min-h-[250px] min-h-[287px] w-full"
                        allowFullScreen="allowFullScreen"></iframe>
                    ) : (
                      <img
                        className="group-hover:scale-110 duration-300 xl:min-h-[287px] lg:min-h-[254.7px] md:min-h-[182.9px] sm:min-h-[250px] min-h-[287px] object-cover"
                        src={value.image}
                        alt="video-thumbnail"
                        loading="lazy"
                      />
                    )}
                    {isVideoPlaying === index ? (
                      ""
                    ) : (
                      <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        onClick={() => setIsVideoPlaying(index)}>
                        <PlayBtnIcon />
                      </button>
                    )}
                  </div>
                  <div className="px-2">
                    <h3 className="font-poppins font-semibold text-white text-xl pt-4 pb-[5px] opacity-90">
                      {value.title}
                    </h3>
                    <span className="flex items-center text-2xl text-white">
                      <ChennalIcon />+
                    </span>

                    <div className="lg:w-1/3 w-full">
                      <h4 className="font-poppins font-normal text-base text-white opacity-70">
                        Your rating: {value.rating}/5
                      </h4>
                      <span className="flex gap-1 mt-2">
                        {ratingStars(value.rating)}
                      </span>
                    </div>
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
            );
          })}
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
          className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:-translate-y-1/2 xl:absolute top-1/2 ${
            showSidebar ? " translate-x-full " : "translate-x-[100%] "
          }  right-[-20px] min-[1400px]:translate-x-full`}>
          <CommonRightArrowIcon />
        </button>
      </div>
    </div>
  );
};
export default CommonVideoSlider;
