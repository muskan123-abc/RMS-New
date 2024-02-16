import React, { useState } from "react";
// import { relatedItems } from "../common/Helper";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils/CommonFunction";
import { FaqArrowIcon } from "../common/Icons";
import { relatedItems } from "./Helper";

const Suggestion = ({ setVideoClick }) => {
  //FOR NAVIGATE PATH
  const navigate = useNavigate();
  // STATE VALUE IMPORT FROM PROVIDER
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Function to handle the click event on a card
  const handleCardClick = (value) => {
    setIsVideoPlaying(true);
    localStorage.setItem("current-movie", JSON.stringify(value));
    setVideoClick(value);
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`?title=${formattedTitle}`);
  };

  // Determine the visible items based on the showAll card
  const visibleItems = showAll ? relatedItems : relatedItems.slice(0, 15);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {visibleItems.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              handleCardClick(item);
              scrollToTop();
            }}
            className="flex gap-2.5 bg-[#2D281F] cursor-pointer rounded-md border border-solid border-[#FFFFFF40] p-[6px]">
            <img
              className="rounded-md"
              width="88"
              height="88"
              loading="lazy"
              src={item.image}
              alt="video-thumbnail"
            />

            <div>
              <h3 className="ff_poppins font-medium text-sm text-white opacity-90 leading-5 mb-1">
                {item.title}
              </h3>
              <p className="ff_poppins font-normal text-xs text-white opacity-70 mb-1">
                {item.trailer}
              </p>
              <p className="ff_poppins font-normal text-xs text-white opacity-70 mb-0">
                {formatNumber(item.views)} views
                <span className="ms-4 before:content-[''] before:w-[3px] before:h-[3px] before:rounded-md before:absolute before:top-1/2 before:start-[-5px] before:bg-white before:-translate-x-1/2 relative">
                  {item.outTime}
                </span>
              </p>
            </div>
          </div>
        );
      })}
      {!showAll && relatedItems.length > 10 && (
        <button
          onClick={() => setShowAll(true)}
          className="text-white ff_inter font-semibold mx-auto mt-4 bg-transparent border-0 flex items-center gap-2">
          Show More
          <span>
            <FaqArrowIcon />
          </span>
        </button>
      )}
    </>
  );
};

export default Suggestion;
