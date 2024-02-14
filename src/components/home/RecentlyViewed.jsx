import React, { useRef, useState } from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { recentlyViewedSlider } from "./Halper";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../common/Icons";
import CustomButton from "../common/fields/button/CustomButton";
const RecentlyViewed = ({ showSidebar }) => {
  // STATES VALUE IMPORT FROM PROVIDER
  const [cardData, setCardData] = useState("");
  const [activeTab, setActiveTab] = useState("All"); // State to manage active tab index

  // FOR REDIRECT TO ANY PAGE
  const navigate = useNavigate();

  // State to track active arrow direction
  // const [activeArrow, setActiveArrow] = useState("right");
  // Function to handle left arrow click
  const handleLeftArrow = () => {
    slider.current.slickPrev();
    // setActiveArrow("left");
  };
  // Function to handle right arrow click
  const handleRightArrow = () => {
    slider.current.slickNext();
    // setActiveArrow("right");
  };
  // Ref for the Slider component
  const slider = useRef(null);

  //SLIDER SETTING
  var settings = {
    dots: false,
    loop: true,

    infinite: true,
    nextArrow: ".left-arrow",
    prevArrow: ".right-arrow",
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,

          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,

          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,

          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          dots: true,
          autoplay: true,
        },
      },
    ],
  };
  //FOR DIRECTION TO PRODUCT PAGE
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    setCardData(value);
  };

  //SCROOL TOP FUNCTION
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div
        className={`relative pt-12 xl:pt-[50px]  mx-auto  ${
          showSidebar
            ? " min-[1350px]:max-w-[900px] min-[1400px]:max-w-[950px]"
            : "max-w-[1140px]"
        }`}>
        <h2 className=" text-center font-poppins font-semibold text-[30px] md:text-3xl text-white mb-0 leading-[142%]">
          Reviews & <span className="common-text-gradient">Rating</span>
        </h2>
        <div className="justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 hidden xl:flex">
          <button
            aria-label="Slider Arrow"
            onClick={handleLeftArrow}
            className={`common-arrow left-arrow bg-transparent w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-[47%] left-[-5%]
                 `}>
            <CommonLeftArrowIcon />
          </button>
          <button
            aria-label="Slider Arrow"
            onClick={handleRightArrow}
            className={`common-arrow right-arrow bg-transparent w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-[47%]  right-[-5%]
                 `}>
            <CommonRightArrowIcon />
          </button>
        </div>
        <div className="my-12">
          <Slider className="pb-8 xl:pb-0" ref={slider} {...settings}>
            {recentlyViewedSlider.map((value, index) => {
              return (
                <div onClick={() => onNavigateHandler(value)} key={index}>
                  <div className=" rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2 mx-[10px] mb-2">
                    <div
                      className={`flex bg-cover bg-no-repeat rounded-xl bg-center h-[439px] relative px-2 `}
                      style={{
                        backgroundImage: `url(${value.image})`,
                      }}>
                      <div className=" flex flex-col flex-grow justify-end">
                        <h5 className=" font-poppins text-base  font-semibold text-white opacity-90  mb-0">
                          {value.title}
                        </h5>
                        <span className="flex items-center text-2xl text-white">
                          <ChennalIcon />+
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 sm:gap-4 justify-between mt-4">
                      <CustomButton
                        title="Add a Watchlist" //set button title
                        isGradient={true} // is grident is  visible // controle  btn types
                        varient="button" // set button type like  Link and  Button
                        url="" // set url when button type  is link
                        isVisible={true} // handle  button visibility
                        customStyles="flex justify-center !px-0" // add custom styles  \\ use custom styles with importent
                        setButtonFull="w-full"
                      />
                      <CustomButton
                        title="Share" //set button title
                        isGradient={true} // is grident is  visible // controle  btn types
                        varient="button" // set button type like  Link and  Button
                        url="" // set url when button type  is link
                        isVisible={true} // handle  button visibility
                        customStyles=" flex justify-center" // add custom styles  \\ use custom styles with importent
                        icon={<ShareIcon />}
                        setButtonFull="w-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="text-center mt-12 mb-20">
          {" "}
          <CustomButton
            title="All Viewed" //set button title
            isGradient={true} // is grident is  visible // controle  btn types
            varient="button" // set button type like  Link and  Button
            url="" // set url when button type  is link
            isVisible={true} // handle  button visibility
            customStyles=" flex justify-center" // add custom styles  \\ use custom styles with importent
          />
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
