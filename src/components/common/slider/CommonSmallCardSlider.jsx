import React, { useRef, useState } from "react";
import image from "../../../assets/images/png/dummy-file.png";
import {
  ChennalIcon,
  CommonLeftArrowIcon,
  CommonRightArrowIcon,
  ShareIcon,
} from "../Icons";
import { ratingStars } from "../../../utils/CommonFunction";
import CustomButton from "../fields/button/CustomButton";
import Slider from "react-slick";

const CommonSmallCardSlider = ({ cardContent }) => {
  const [cardData, setCardData] = useState("");
  const [heartClicked, setHeartClicked] = useState([]);

  const likeHandler = (value) => {
    if (heartClicked.includes(value)) {
      const updatedHeartClicked = heartClicked.filter((item) => item !== value);
      setHeartClicked(updatedHeartClicked);
    } else {
      setHeartClicked([...heartClicked, value]);
    }
  };
  const slider = useRef(null);

  const handleLeftArrow = () => {
    slider.current.slickPrev();
  };
  // Function to handle right arrow click
  const handleRightArrow = () => {
    slider.current.slickNext();
  };

  var settings = {
    dots: false,
    infinite: true,
    nextArrow: ".left-arrow",
    prevArrow: ".right-arrow",
    arrows: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,

          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToShow: 1.99,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.99,
          dots: true,
        },
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1140px] mx-auto relative">
      <Slider className="pb-8 xl:pb-0" ref={slider} {...settings}>
        {cardContent.map((obj, index) => {
          const isLiked = heartClicked.includes(index);
          return (
            <div className=" flex justify-center">
              <div className="group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2  mb-2 mx-auto w-[98%] sm:max-w-[270px]">
                <div
                  className={`flex bg-cover bg-no-repeat rounded-xl bg-center h-[530px] relative p-2`}
                  style={{
                    backgroundImage: `url(${obj.image})`,
                  }}>
                  <div className=" flex  flex-col flex-grow justify-end">
                    <h5 className="font-poppins text-base  font-semibold text-white opacity-90  mb-2">
                      {obj.title}
                    </h5>
                    <span className="flex items-center text-2xl text-white">
                      <ChennalIcon />+
                    </span>
                    <div className=" flex  items-center gap-2 mb-1">
                      <p className="font-poppins text-sm font-normal text-white opacity-70 mb-0">
                        Your rating: {obj.rating}/5
                      </p>
                      <span className="flex gap-1">
                        {ratingStars(obj.rating)}
                      </span>
                    </div>
                    <div className="flex gap-3 pt-3">
                      <CustomButton
                        title="Watchlist" //set button title
                        isGradient={true} // is grident is  visible // controle  btn types
                        varient="button" // set button type like  Link and  Button
                        url="" // set url when button type  is link
                        isVisible={true} // handle  button visibility
                        customStyles="" // add custom styles  \\ use custom styles with importent
                      />
                      <CustomButton
                        title="Trailer" //set button title
                        isGradient={false} // is grident is  visible // controle  btn types
                        varient="button" // set button type like  Link and  Button
                        url="" // set url when button type  is link
                        isVisible={true} // handle  button visibility
                        customStyles="" // add custom styles  \\ use custom styles with importent
                      />
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
          className={`common-arrow left-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 left-[-5%]  `}>
          <CommonLeftArrowIcon />
        </button>
        <button
          aria-label="Slider Arrow"
          onClick={handleRightArrow}
          className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 right-[-5%]  `}>
          <CommonRightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default CommonSmallCardSlider;
