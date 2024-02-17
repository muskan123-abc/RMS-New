import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import image from "../../assets/images/svg/tap-recorder-icon.svg";
import { ratingStars } from "../../utils/CommonFunction";
import { featuredSlider } from "../common/Helper";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../common/Icons";
import CustomButton from "../common/fields/button/CustomButton";
const FeaturedToday = ({ showSidebar }) => {
  //FOR REDIRECT TO PATH
  const navigate = useNavigate();
  // Ref for the Slider component
  const slider = useRef(null);
  //IMPORT SERCARDDATA FROM PROVIDER
  const [cardData, setCardData] = useState("");
  // Function to handle left arrow click
  const handleLeftArrow = () => {
    slider.current.slickPrev();
  };
  // Function to handle right arrow click
  const handleRightArrow = () => {
    slider.current.slickNext();
  };
  //SLIDER SETTINGS
  var settings = {
    dots: false,
    loop: true,

    infinite: true,
    nextArrow: ".left-arrow",
    prevArrow: ".right-arrow",
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: showSidebar ? 1 : 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: showSidebar ? 1 : 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: showSidebar ? 1 : 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: showSidebar ? 1 : 2,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };
  //FUNCTION FOR REDIRECT TO PRODUCT-DETAILS PAGE
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    setCardData(value);
  };
  return (
    <>
      <section
        className={`${
          showSidebar ? "xl:py-44" : "xl:pt-28  md:pb-36"
        } " relative pb-0 md:pt-[170px] "`}
        id="featured">
        <span className=" absolute left-0 top-0 ps-6 hidden lg:block movieIcon_animation">
          <img src={image} alt=" alternate" />
        </span>
        <div
          className={`container px-4 px:md-0  max-w-full xl:max-w-[1140px] ${
            showSidebar ? " custom-2xl:max-w-[1000px]" : "xl:max-w-[1140px]"
          } 2xl:max-w-[1320px] mx-auto  pt-10 md:pt-20 relative `}>
          <div className=" flex flex-col md:flex-row items-center pb-10 mx-auto ">
            <div
              className={`w-full  md:w-1/2 lg:w-[40%]  ${
                showSidebar
                  ? "xl:w-[50%]  min-[1440px]:w-[45%]"
                  : "xl:w-[40%]  min-[1440px]:w-[38%]"
              }`}>
              <h2 className="secondry_heading md:!text-start">
                Featured
                <span> today</span>
              </h2>
              <p className=" font-poppins text-sm md:text-base font-normal text-white leading-[160%] opacity-70 pt-3 md:pt-4 text-center md:text-start">
                Amet suscipit risus nulla libero porta purus id rhoncus emper
                faucibus risus cursus dibero ipsum tempus rhoncus dignissi massa
                cursus tortor.
              </p>
              <div className=" justify-center md:justify-start gap-5 pt-10 hidden md:flex">
                <button
                  aria-label="Slider Arrow"
                  onClick={handleLeftArrow}
                  className={`common-arrow left-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent `}>
                  <CommonLeftArrowIcon />
                </button>
                <button
                  aria-label="Slider Arrow"
                  onClick={handleRightArrow}
                  className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-light-yellow hover:border-transparent 
                   `}>
                  <CommonRightArrowIcon />
                </button>
              </div>
            </div>
            <div
              className={`w-full md:w-[45%]  md:absolute right-0 pt-8 md:pt-0  md:my-11 lg:w-[55%] min-[1530px]:w-[50%] ${
                showSidebar ? " xl:w-[50%]" : " xl:w-[60%] "
              }`}>
              <Slider className="pb-8 md:pb-0" ref={slider} {...settings}>
                {featuredSlider.map((value, index) => {
                  return (
                    <div onClick={() => onNavigateHandler(value)} key={index}>
                      <div className=" cursor-pointer rounded-xl border border-solid border-shadow-gray p-2 mx-[10px] mb-2">
                        <div
                          className={`flex bg-cover bg-no-repeat  bg-top rounded-xl ${
                            showSidebar
                              ? "h-[450px] lg:h-[505px] "
                              : "h-[400px]"
                          }  relative p-2 `}
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}>
                          <div className=" flex  flex-col flex-grow justify-end">
                            <h5 className=" font-poppins text-base  font-semibold text-white opacity-90  mb-0">
                              {value.title}
                            </h5>
                            <span className="flex items-center text-2xl text-white">
                              <ChennalIcon />+
                            </span>
                            <p className=" font-poppins text-sm font-normal text-white opacity-70 mb-3">
                              {value.description}
                            </p>
                            <span className="flex gap-1">
                              {ratingStars(value.rating)}@here take pull from
                              dev
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center w-full gap-2 lg:gap-4 mt-2 ">
                          <CustomButton
                            title="Add a Watchlist" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles="flex justify-center !px-0" // add custom styles  \\ use custom styles with importent
                            setButtonFull="w-full md:w-8/12 xl:w-10/12"
                          />
                          <CustomButton
                            title="Share" //set button title
                            isGradient={true} // is grident is  visible // controle  btn types
                            varient="button" // set button type like  Link and  Button
                            url="" // set url when button type  is link
                            isVisible={true} // handle  button visibility
                            customStyles=" flex justify-center" // add custom styles  \\ use custom styles with importent
                            icon={<ShareIcon />}
                            setButtonFull="w-full md:w-8/12"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedToday;
