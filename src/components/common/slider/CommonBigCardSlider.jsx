import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Slider from "react-slick";
import { formatNumber, ratingStars } from "../../../utils/CommonFunction";
import {
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  DownloadIcon,
} from "../Icons";
import CustomButton from "../fields/button/CustomButton";
import { mostRatedSliderHome } from "../Helper";

const CommonBigCardSlider = ({ showSidebar }) => {
  //FOR GETTING PATH
  // IMPORT FROM PROVIDER'S STATE
  const [cardData, setCardData] = useState(false);

  //FOR REDIRECT TO ANY OTHER PAGE
  const navigate = useNavigate();
  // STATE TO SET ACTIVE ARROW OF SLIDER
  const [isLoading, setIsLoading] = useState(false);
  // State to manage selected indexes for Read More functionality
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  // REF FOR GET SLIDER ARROW
  const mostRatedSlider_slider = useRef(null);
  // FUNTION FOR HANDLE LEFT ARROW
  const handleLeftArrow = () => {
    mostRatedSlider_slider.current.slickPrev();
  };
  // FUNTION FOR HANDLE RIGHT ARROW
  const handleRightArrow = () => {
    mostRatedSlider_slider.current.slickNext();
  };
  // SLIDER PROPERTIES AND RESPONSIVE
  var settings = {
    dots: false,
    loop: true,
    infinite: true,
    arrows: false,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: true,
        },
      },
    ],
  };
  // Function to handle Read More button click
  const handleReadMoreClick = (index) => {
    if (selectedIndexes.includes(index)) {
      const data = selectedIndexes.filter((obj) => obj !== index);
      setSelectedIndexes(data);
    } else {
      setSelectedIndexes((prev) => [...prev, index]);
    }
  };
  const onNavigateHandler = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`/product-details?title=${formattedTitle}`);
    localStorage.setItem("current-movie", JSON.stringify(value));
    setCardData(value);
  };

  const pathName = useLocation().pathname;
  return (
    <>
      <div
        className={`relative z-10 ${
          showSidebar
            ? " custom-2xl:max-w-[790px] custom-3xl:max-w-[870px]"
            : "max-w-[1140px]"
        } mx-auto`}
      >
        <Slider
          ref={mostRatedSlider_slider}
          {...settings}
          className="relative pb-8 xl:pb-0"
        >
          {/* MOST RATED SLIDER CARDS BY MAP  */}
          {mostRatedSliderHome.map((obj, index) => {
            const textLength = obj.description.length;
            const value = selectedIndexes.includes(index)
              ? obj.description
              : obj.description.substring(0, 150);
            return (
              <div key={index} className="px-2 xl:pb-0 ">
                <div className="bg-gradient  w-[326px] h-[326px] rounded-[326px] blur-[250px] absolute left-[-50px] bottom-[-50px] z-10 hidden lg:block"></div>
                <div className="flex bg-[#FFFFFF0A] backdrop-blur-[136px] lg:gap-[50px] gap-6 items-center sm:ps-10 ps-3 lg:pe-[40px] sm:pe-8 pe-3 py-[30px] relative rounded-xl md:flex-row flex-col">
                  <div className=" rounded-[0px_12px_0px_12px] h-[14px] min-w-[280px] bg-gradient top-0 left-1/2 absolute -translate-x-[62%]"></div>
                  <div className=" rounded-[12px_0px_12px_0px] h-[14px] min-w-[280px] bg-gradient bottom-0 right-0 absolute"></div>
                  <div className=" opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px] rounded-[326px] blur-[250px] bg-[linear-gradient(135deg,#F2CD75_0%,#A97424_100%)]"></div>
                  <div className="min-w-[270px] rounded-lg relative w-[270px] h-[381px]  overflow-hidden border-2 border-solid border-[#FFFFFF4D] rated_movies_shadow max-w-[400px]">
                    {!isLoading ? <div className="skeleton-loader"></div> : ""}
                    <img
                      className={isLoading ? "w-full h-full" : "w-0 h-0"}
                      src={obj.image}
                      onLoad={() => setIsLoading(true)}
                      alt="movie-posture"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative after:content-[''] after:absolute after:top-0 sm:after:left-1/3 sm:after:-translate-x-1/2 sm:sm:after:w-[391px] sm:after:w-[143px] sm:sm:after:h-[150px] sm:after:h-[143px] sm:after:rounded-full sm:after:z-0">
                    <div className="lg:flex justify-between items-center">
                      {pathName === "/category" ? (
                        <h4 className="font-poppins font-semibold md:text-2xl text-sm text-white opacity-90">
                          {obj.title2}
                        </h4>
                      ) : (
                        <h4 className="font-poppins font-semibold md:text-2xl text-sm text-white opacity-90">
                          {obj.title}
                        </h4>
                      )}

                      {pathName === "/category" ? (
                        <CustomButton
                          className="lg:!w-[170px] flex justify-center my-2 lg:my-0"
                          title="Join Now" //set button title
                          isGradient={true} // is grident is  visible // controle  btn types
                          varient="button" // set button type like  Link and  Button
                          isVisible={true} // handle  button visibility
                        />
                      ) : (
                        <CustomButton
                          className="my-2 sm:my-0"
                          title="DownLoad" //set button title
                          isGradient={true} // is grident is  visible // controle  btn types
                          varient="button" // set button type like  Link and  Button
                          url="" // set url when button type  is link
                          isVisible={true} // handle  button visibility
                          customStyles="" // add custom styles  \\ use custom styles with importent
                          icon={<DownloadIcon />} // add icon //
                        />
                      )}
                    </div>

                    {pathName === "/category" ? (
                      ""
                    ) : (
                      <div className="inline-flex justify-between xs:justify-normal  overflow-x-auto whitespace-nowrap gap-5 2xs:gap-[5px] xs:gap-5 lg:gap-4 sm:pt-3 pb-5">
                        <h5 className="font-poppins font-normal text-xs sm:text-sm text-white opacity-70">
                          {formatNumber(189000)} Reviews
                        </h5>
                        <h5 className="font-poppins font-normal text-xs sm:text-sm text-white opacity-70">
                          {formatNumber(29000000)}+ Download
                        </h5>
                        <h5 className="font-poppins font-normal text-xs sm:text-sm text-white opacity-70">
                          {obj.rating}+ Rated out of 5
                        </h5>
                      </div>
                    )}

                    <span className="flex gap-1">
                      {ratingStars(obj.rating)}
                    </span>
                    <h5 className="font-poppins font-normal lg:text-base text-sm text-white opacity-80 pt-5 lg:pb-[30px] pb-[15px] md:block hidden ">
                      {obj.description}
                    </h5>
                    {/* ADD READ MORE BUTTON IN TEXT */}
                    <h5 className="font-poppins font-normal lg:text-base text-sm text-white opacity-80 pt-5 lg:pb-[30px] pb-[15px] md:hidden block">
                      <span>{value} </span>
                      {selectedIndexes === index ? (
                        <span>{obj.hiddendata}</span>
                      ) : (
                        obj.threedots
                      )}{" "}
                      {textLength < 200 ? (
                        ""
                      ) : (
                        <button
                          className="whitespace-nowrap cursor-pointer relative z-10 font-poppins font-normal lg:text-base text-sm text-[#D4A954]"
                          onClick={() => handleReadMoreClick(index)}
                        >
                          {selectedIndexes.includes(index)
                            ? "Read less"
                            : "...Read more"}
                        </button>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* SLIDER ARROWS  */}
        <div className=" justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 hidden xl:flex">
          <button
            aria-label="Slider Arrow"
            onClick={handleLeftArrow}
            className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 left-[-5.8%] `}
          >
            <CommonLeftArrowIcon />
          </button>
          <button
            aria-label="Slider Arrow"
            onClick={handleRightArrow}
            className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 right-[-5.8%] `}
          >
            <CommonRightArrowIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommonBigCardSlider;
